import { B as tags$1, C as foldInside, G as NodeType, H as IterMode, J as Tree, K as NodeWeakMap, L as syntaxTree, T as foldNodeProp, U as NodeProp, V as DefaultBufferLength, W as NodeSet, d as LRLanguage, k as indentNodeProp, m as LanguageSupport, q as Parser, v as continuedIndent, z as styleTags } from "./autocomplete+[...].mjs";
//#region node_modules/@lezer/lr/dist/index.js
/**
A parse stack. These are used internally by the parser to track
parsing progress. They also provide some properties and methods
that external code such as a tokenizer can use to get information
about the parse state.
*/
var Stack = class Stack {
	/**
	@internal
	*/
	constructor(p, stack, state, reducePos, pos, score, buffer, bufferBase, curContext, lookAhead = 0, parent) {
		this.p = p;
		this.stack = stack;
		this.state = state;
		this.reducePos = reducePos;
		this.pos = pos;
		this.score = score;
		this.buffer = buffer;
		this.bufferBase = bufferBase;
		this.curContext = curContext;
		this.lookAhead = lookAhead;
		this.parent = parent;
	}
	/**
	@internal
	*/
	toString() {
		return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
	}
	/**
	@internal
	*/
	static start(p, state, pos = 0) {
		let cx = p.parser.context;
		return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
	}
	/**
	The stack's current [context](#lr.ContextTracker) value, if
	any. Its type will depend on the context tracker's type
	parameter, or it will be `null` if there is no context
	tracker.
	*/
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	/**
	@internal
	*/
	pushState(state, start) {
		this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
		this.state = state;
	}
	/**
	@internal
	*/
	reduce(action) {
		var _a;
		let depth = action >> 19, type = action & 65535;
		let { parser } = this.p;
		let lookaheadRecord = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos);
		let dPrec = parser.dynamicPrecedence(type);
		if (dPrec) this.score += dPrec;
		if (depth == 0) {
			if (type < parser.minRepeatTerm && this.reducePos < this.pos) this.reducePos = this.pos;
			this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
			if (type < parser.minRepeatTerm) this.storeNode(type, this.reducePos, this.reducePos, lookaheadRecord ? 8 : 4, true);
			this.reduceContext(type, this.reducePos);
			return;
		}
		let base = this.stack.length - (depth - 1) * 3 - (action & 262144 ? 6 : 0);
		let start = base ? this.stack[base - 2] : this.p.ranges[0].from;
		if (type < parser.minRepeatTerm && start == this.reducePos && this.reducePos < this.pos) this.reducePos = this.pos;
		let size = this.reducePos - start;
		if (size >= 2e3 && !((_a = this.p.parser.nodeSet.types[type]) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
			if (start == this.p.lastBigReductionStart) {
				this.p.bigReductionCount++;
				this.p.lastBigReductionSize = size;
			} else if (this.p.lastBigReductionSize < size) {
				this.p.bigReductionCount = 1;
				this.p.lastBigReductionStart = start;
				this.p.lastBigReductionSize = size;
			}
		}
		let bufferBase = base ? this.stack[base - 1] : 0, count = this.bufferBase + this.buffer.length - bufferBase;
		if (type < parser.minRepeatTerm || action & 131072) {
			let pos = parser.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(type, start, pos, count + 4, true);
		}
		if (action & 262144) this.state = this.stack[base];
		else {
			let baseStateID = this.stack[base - 3];
			this.state = parser.getGoto(baseStateID, type, true);
		}
		while (this.stack.length > base) this.stack.pop();
		this.reduceContext(type, start);
	}
	/**
	@internal
	*/
	storeNode(term, start, end, size = 4, mustSink = false) {
		if (term == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let top = this.buffer.length;
			if (top > 0 && this.buffer[top - 4] == 0 && this.buffer[top - 1] > -1) {
				if (start == end) return;
				if (this.buffer[top - 2] >= start) {
					this.buffer[top - 2] = end;
					return;
				}
			}
		}
		if (!mustSink || this.pos == end) this.buffer.push(term, start, end, size);
		else {
			let index = this.buffer.length;
			if (index > 0 && (this.buffer[index - 4] != 0 || this.buffer[index - 1] < 0)) {
				let mustMove = false;
				for (let scan = index; scan > 0 && this.buffer[scan - 2] > end; scan -= 4) if (this.buffer[scan - 1] >= 0) {
					mustMove = true;
					break;
				}
				if (mustMove) while (index > 0 && this.buffer[index - 2] > end) {
					this.buffer[index] = this.buffer[index - 4];
					this.buffer[index + 1] = this.buffer[index - 3];
					this.buffer[index + 2] = this.buffer[index - 2];
					this.buffer[index + 3] = this.buffer[index - 1];
					index -= 4;
					if (size > 4) size -= 4;
				}
			}
			this.buffer[index] = term;
			this.buffer[index + 1] = start;
			this.buffer[index + 2] = end;
			this.buffer[index + 3] = size;
		}
	}
	/**
	@internal
	*/
	shift(action, type, start, end) {
		if (action & 131072) this.pushState(action & 65535, this.pos);
		else if ((action & 262144) == 0) {
			let nextState = action, { parser } = this.p;
			this.pos = end;
			let skipped = parser.stateFlag(nextState, 1);
			if (!skipped && (end > start || type <= parser.maxNode)) this.reducePos = end;
			this.pushState(nextState, skipped ? start : Math.min(start, this.reducePos));
			this.shiftContext(type, start);
			if (type <= parser.maxNode) this.buffer.push(type, start, end, 4);
		} else {
			this.pos = end;
			this.shiftContext(type, start);
			if (type <= this.p.parser.maxNode) this.buffer.push(type, start, end, 4);
		}
	}
	/**
	@internal
	*/
	apply(action, next, nextStart, nextEnd) {
		if (action & 65536) this.reduce(action);
		else this.shift(action, next, nextStart, nextEnd);
	}
	/**
	@internal
	*/
	useNode(value, next, start) {
		let index = this.p.reused.length - 1;
		if (index < 0 || this.p.reused[index] != value) {
			this.p.reused.push(value);
			index++;
		}
		let end = this.reducePos = this.pos = start + value.length;
		this.pushState(next, start);
		this.buffer.push(index, start, end, -1);
		if (this.curContext) this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
	}
	/**
	@internal
	*/
	split() {
		let parent = this;
		let off = parent.buffer.length;
		if (off && parent.buffer[off - 4] == 0) off -= 4;
		while (off > 0 && parent.buffer[off - 2] > parent.reducePos) off -= 4;
		let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
		while (parent && base == parent.bufferBase) parent = parent.parent;
		return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
	}
	/**
	@internal
	*/
	recoverByDelete(next, nextEnd) {
		let isNode = next <= this.p.parser.maxNode;
		if (isNode) this.storeNode(next, this.pos, nextEnd, 4);
		this.storeNode(0, this.pos, nextEnd, isNode ? 8 : 4);
		this.pos = this.reducePos = nextEnd;
		this.score -= 190;
	}
	/**
	Check if the given term would be able to be shifted (optionally
	after some reductions) on this stack. This can be useful for
	external tokenizers that want to make sure they only provide a
	given token when it applies.
	*/
	canShift(term) {
		for (let sim = new SimulatedStack(this);;) {
			let action = this.p.parser.stateSlot(sim.state, 4) || this.p.parser.hasAction(sim.state, term);
			if (action == 0) return false;
			if ((action & 65536) == 0) return true;
			sim.reduce(action);
		}
	}
	/**
	@internal
	*/
	recoverByInsert(next) {
		if (this.stack.length >= 300) return [];
		let nextStates = this.p.parser.nextStates(this.state);
		if (nextStates.length > 8 || this.stack.length >= 120) {
			let best = [];
			for (let i = 0, s; i < nextStates.length; i += 2) if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next)) best.push(nextStates[i], s);
			if (this.stack.length < 120) for (let i = 0; best.length < 8 && i < nextStates.length; i += 2) {
				let s = nextStates[i + 1];
				if (!best.some((v, i) => i & 1 && v == s)) best.push(nextStates[i], s);
			}
			nextStates = best;
		}
		let result = [];
		for (let i = 0; i < nextStates.length && result.length < 4; i += 2) {
			let s = nextStates[i + 1];
			if (s == this.state) continue;
			let stack = this.split();
			stack.pushState(s, this.pos);
			stack.storeNode(0, stack.pos, stack.pos, 4, true);
			stack.shiftContext(nextStates[i], this.pos);
			stack.reducePos = this.pos;
			stack.score -= 200;
			result.push(stack);
		}
		return result;
	}
	/**
	@internal
	*/
	forceReduce() {
		let { parser } = this.p;
		let reduce = parser.stateSlot(this.state, 5);
		if ((reduce & 65536) == 0) return false;
		if (!parser.validAction(this.state, reduce)) {
			let depth = reduce >> 19, term = reduce & 65535;
			let target = this.stack.length - depth * 3;
			if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0) {
				let backup = this.findForcedReduction();
				if (backup == null) return false;
				reduce = backup;
			}
			this.storeNode(0, this.pos, this.pos, 4, true);
			this.score -= 100;
		}
		this.reducePos = this.pos;
		this.reduce(reduce);
		return true;
	}
	/**
	Try to scan through the automaton to find some kind of reduction
	that can be applied. Used when the regular ForcedReduce field
	isn't a valid action. @internal
	*/
	findForcedReduction() {
		let { parser } = this.p, seen = [];
		let explore = (state, depth) => {
			if (seen.includes(state)) return;
			seen.push(state);
			return parser.allActions(state, (action) => {
				if (action & 393216);
				else if (action & 65536) {
					let rDepth = (action >> 19) - depth;
					if (rDepth > 1) {
						let term = action & 65535, target = this.stack.length - rDepth * 3;
						if (target >= 0 && parser.getGoto(this.stack[target], term, false) >= 0) return rDepth << 19 | 65536 | term;
					}
				} else {
					let found = explore(action, depth + 1);
					if (found != null) return found;
				}
			});
		};
		return explore(this.state, 0);
	}
	/**
	@internal
	*/
	forceAll() {
		while (!this.p.parser.stateFlag(this.state, 2)) if (!this.forceReduce()) {
			this.storeNode(0, this.pos, this.pos, 4, true);
			break;
		}
		return this;
	}
	/**
	Check whether this state has no further actions (assumed to be a direct descendant of the
	top state, since any other states must be able to continue
	somehow). @internal
	*/
	get deadEnd() {
		if (this.stack.length != 3) return false;
		let { parser } = this.p;
		return parser.data[parser.stateSlot(this.state, 1)] == 65535 && !parser.stateSlot(this.state, 4);
	}
	/**
	Restart the stack (put it back in its start state). Only safe
	when this.stack.length == 3 (state is directly below the top
	state). @internal
	*/
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, true);
		this.state = this.stack[0];
		this.stack.length = 0;
	}
	/**
	@internal
	*/
	sameState(other) {
		if (this.state != other.state || this.stack.length != other.stack.length) return false;
		for (let i = 0; i < this.stack.length; i += 3) if (this.stack[i] != other.stack[i]) return false;
		return true;
	}
	/**
	Get the parser used by this stack.
	*/
	get parser() {
		return this.p.parser;
	}
	/**
	Test whether a given dialect (by numeric ID, as exported from
	the terms file) is enabled.
	*/
	dialectEnabled(dialectID) {
		return this.p.parser.dialect.flags[dialectID];
	}
	shiftContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	reduceContext(term, start) {
		if (this.curContext) this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
	}
	/**
	@internal
	*/
	emitContext() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -3) this.storeNode(this.curContext.hash, this.reducePos, this.reducePos, -3, true);
	}
	/**
	@internal
	*/
	emitLookAhead() {
		let last = this.buffer.length - 1;
		if (last < 0 || this.buffer[last] != -4) this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(context) {
		if (context != this.curContext.context) {
			let newCx = new StackContext(this.curContext.tracker, context);
			if (newCx.hash != this.curContext.hash) this.emitContext();
			this.curContext = newCx;
		}
	}
	/**
	@internal
	*/
	setLookAhead(lookAhead) {
		if (lookAhead <= this.lookAhead) return false;
		this.emitLookAhead();
		this.lookAhead = lookAhead;
		return true;
	}
	/**
	@internal
	*/
	close() {
		if (this.curContext && this.curContext.tracker.strict) this.emitContext();
		if (this.lookAhead > 0) this.emitLookAhead();
	}
};
var StackContext = class {
	constructor(tracker, context) {
		this.tracker = tracker;
		this.context = context;
		this.hash = tracker.strict ? tracker.hash(context) : 0;
	}
};
var SimulatedStack = class {
	constructor(start) {
		this.start = start;
		this.state = start.state;
		this.stack = start.stack;
		this.base = this.stack.length;
	}
	reduce(action) {
		let term = action & 65535, depth = action >> 19;
		if (depth == 0) {
			if (this.stack == this.start.stack) this.stack = this.stack.slice();
			this.stack.push(this.state, 0, 0);
			this.base += 3;
		} else this.base -= (depth - 1) * 3;
		let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
		this.state = goto;
	}
};
var StackBufferCursor = class StackBufferCursor {
	constructor(stack, pos, index) {
		this.stack = stack;
		this.pos = pos;
		this.index = index;
		this.buffer = stack.buffer;
		if (this.index == 0) this.maybeNext();
	}
	static create(stack, pos = stack.bufferBase + stack.buffer.length) {
		return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
	}
	maybeNext() {
		let next = this.stack.parent;
		if (next != null) {
			this.index = this.stack.bufferBase - next.bufferBase;
			this.stack = next;
			this.buffer = next.buffer;
		}
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		this.index -= 4;
		this.pos -= 4;
		if (this.index == 0) this.maybeNext();
	}
	fork() {
		return new StackBufferCursor(this.stack, this.pos, this.index);
	}
};
function decodeArray(input, Type = Uint16Array) {
	if (typeof input != "string") return input;
	let array = null;
	for (let pos = 0, out = 0; pos < input.length;) {
		let value = 0;
		for (;;) {
			let next = input.charCodeAt(pos++), stop = false;
			if (next == 126) {
				value = 65535;
				break;
			}
			if (next >= 92) next--;
			if (next >= 34) next--;
			let digit = next - 32;
			if (digit >= 46) {
				digit -= 46;
				stop = true;
			}
			value += digit;
			if (stop) break;
			value *= 46;
		}
		if (array) array[out++] = value;
		else array = new Type(value);
	}
	return array;
}
var CachedToken = class {
	constructor() {
		this.start = -1;
		this.value = -1;
		this.end = -1;
		this.extended = -1;
		this.lookAhead = 0;
		this.mask = 0;
		this.context = 0;
	}
};
var nullToken = new CachedToken();
/**
[Tokenizers](#lr.ExternalTokenizer) interact with the input
through this interface. It presents the input as a stream of
characters, tracking lookahead and hiding the complexity of
[ranges](#common.Parser.parse^ranges) from tokenizer code.
*/
var InputStream = class {
	/**
	@internal
	*/
	constructor(input, ranges) {
		this.input = input;
		this.ranges = ranges;
		/**
		@internal
		*/
		this.chunk = "";
		/**
		@internal
		*/
		this.chunkOff = 0;
		/**
		Backup chunk
		*/
		this.chunk2 = "";
		this.chunk2Pos = 0;
		/**
		The character code of the next code unit in the input, or -1
		when the stream is at the end of the input.
		*/
		this.next = -1;
		/**
		@internal
		*/
		this.token = nullToken;
		this.rangeIndex = 0;
		this.pos = this.chunkPos = ranges[0].from;
		this.range = ranges[0];
		this.end = ranges[ranges.length - 1].to;
		this.readNext();
	}
	/**
	@internal
	*/
	resolveOffset(offset, assoc) {
		let range = this.range, index = this.rangeIndex;
		let pos = this.pos + offset;
		while (pos < range.from) {
			if (!index) return null;
			let next = this.ranges[--index];
			pos -= range.from - next.to;
			range = next;
		}
		while (assoc < 0 ? pos > range.to : pos >= range.to) {
			if (index == this.ranges.length - 1) return null;
			let next = this.ranges[++index];
			pos += next.from - range.to;
			range = next;
		}
		return pos;
	}
	/**
	@internal
	*/
	clipPos(pos) {
		if (pos >= this.range.from && pos < this.range.to) return pos;
		for (let range of this.ranges) if (range.to > pos) return Math.max(pos, range.from);
		return this.end;
	}
	/**
	Look at a code unit near the stream position. `.peek(0)` equals
	`.next`, `.peek(-1)` gives you the previous character, and so
	on.
	
	Note that looking around during tokenizing creates dependencies
	on potentially far-away content, which may reduce the
	effectiveness incremental parsing—when looking forward—or even
	cause invalid reparses when looking backward more than 25 code
	units, since the library does not track lookbehind.
	*/
	peek(offset) {
		let idx = this.chunkOff + offset, pos, result;
		if (idx >= 0 && idx < this.chunk.length) {
			pos = this.pos + offset;
			result = this.chunk.charCodeAt(idx);
		} else {
			let resolved = this.resolveOffset(offset, 1);
			if (resolved == null) return -1;
			pos = resolved;
			if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
			else {
				let i = this.rangeIndex, range = this.range;
				while (range.to <= pos) range = this.ranges[++i];
				this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
				if (pos + this.chunk2.length > range.to) this.chunk2 = this.chunk2.slice(0, range.to - pos);
				result = this.chunk2.charCodeAt(0);
			}
		}
		if (pos >= this.token.lookAhead) this.token.lookAhead = pos + 1;
		return result;
	}
	/**
	Accept a token. By default, the end of the token is set to the
	current stream position, but you can pass an offset (relative to
	the stream position) to change that.
	*/
	acceptToken(token, endOffset = 0) {
		let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
		if (end == null || end < this.token.start) throw new RangeError("Token end out of bounds");
		this.token.value = token;
		this.token.end = end;
	}
	/**
	Accept a token ending at a specific given position.
	*/
	acceptTokenTo(token, endPos) {
		this.token.value = token;
		this.token.end = endPos;
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk, chunkPos } = this;
			this.chunk = this.chunk2;
			this.chunkPos = this.chunk2Pos;
			this.chunk2 = chunk;
			this.chunk2Pos = chunkPos;
			this.chunkOff = this.pos - this.chunkPos;
		} else {
			this.chunk2 = this.chunk;
			this.chunk2Pos = this.chunkPos;
			let nextChunk = this.input.chunk(this.pos);
			let end = this.pos + nextChunk.length;
			this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
			this.chunkPos = this.pos;
			this.chunkOff = 0;
		}
	}
	readNext() {
		if (this.chunkOff >= this.chunk.length) {
			this.getChunk();
			if (this.chunkOff == this.chunk.length) return this.next = -1;
		}
		return this.next = this.chunk.charCodeAt(this.chunkOff);
	}
	/**
	Move the stream forward N (defaults to 1) code units. Returns
	the new value of [`next`](#lr.InputStream.next).
	*/
	advance(n = 1) {
		this.chunkOff += n;
		while (this.pos + n >= this.range.to) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			n -= this.range.to - this.pos;
			this.range = this.ranges[++this.rangeIndex];
			this.pos = this.range.from;
		}
		this.pos += n;
		if (this.pos >= this.token.lookAhead) this.token.lookAhead = this.pos + 1;
		return this.readNext();
	}
	setDone() {
		this.pos = this.chunkPos = this.end;
		this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
		this.chunk = "";
		return this.next = -1;
	}
	/**
	@internal
	*/
	reset(pos, token) {
		if (token) {
			this.token = token;
			token.start = pos;
			token.lookAhead = pos + 1;
			token.value = token.extended = -1;
		} else this.token = nullToken;
		if (this.pos != pos) {
			this.pos = pos;
			if (pos == this.end) {
				this.setDone();
				return this;
			}
			while (pos < this.range.from) this.range = this.ranges[--this.rangeIndex];
			while (pos >= this.range.to) this.range = this.ranges[++this.rangeIndex];
			if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) this.chunkOff = pos - this.chunkPos;
			else {
				this.chunk = "";
				this.chunkOff = 0;
			}
			this.readNext();
		}
		return this;
	}
	/**
	@internal
	*/
	read(from, to) {
		if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length) return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
		if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
		if (from >= this.range.from && to <= this.range.to) return this.input.read(from, to);
		let result = "";
		for (let r of this.ranges) {
			if (r.from >= to) break;
			if (r.to > from) result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
		}
		return result;
	}
};
/**
@internal
*/
var TokenGroup = class {
	constructor(data, id) {
		this.data = data;
		this.id = id;
	}
	token(input, stack) {
		let { parser } = stack.p;
		readToken(this.data, input, stack, this.id, parser.data, parser.tokenPrecTable);
	}
};
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
@hide
*/
var LocalTokenGroup = class {
	constructor(data, precTable, elseToken) {
		this.precTable = precTable;
		this.elseToken = elseToken;
		this.data = typeof data == "string" ? decodeArray(data) : data;
	}
	token(input, stack) {
		let start = input.pos, skipped = 0;
		for (;;) {
			let atEof = input.next < 0, nextPos = input.resolveOffset(1, 1);
			readToken(this.data, input, stack, 0, this.data, this.precTable);
			if (input.token.value > -1) break;
			if (this.elseToken == null) return;
			if (!atEof) skipped++;
			if (nextPos == null) break;
			input.reset(nextPos, input.token);
		}
		if (skipped) {
			input.reset(start, input.token);
			input.acceptToken(this.elseToken, skipped);
		}
	}
};
LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/**
`@external tokens` declarations in the grammar should resolve to
an instance of this class.
*/
var ExternalTokenizer = class {
	/**
	Create a tokenizer. The first argument is the function that,
	given an input stream, scans for the types of tokens it
	recognizes at the stream's position, and calls
	[`acceptToken`](#lr.InputStream.acceptToken) when it finds
	one.
	*/
	constructor(token, options = {}) {
		this.token = token;
		this.contextual = !!options.contextual;
		this.fallback = !!options.fallback;
		this.extend = !!options.extend;
	}
};
function readToken(data, input, stack, group, precTable, precOffset) {
	let state = 0, groupMask = 1 << group, { dialect } = stack.p.parser;
	scan: for (;;) {
		if ((groupMask & data[state]) == 0) break;
		let accEnd = data[state + 1];
		for (let i = state + 3; i < accEnd; i += 2) if ((data[i + 1] & groupMask) > 0) {
			let term = data[i];
			if (dialect.allows(term) && (input.token.value == -1 || input.token.value == term || overrides(term, input.token.value, precTable, precOffset))) {
				input.acceptToken(term);
				break;
			}
		}
		let next = input.next, low = 0, high = data[state + 2];
		if (input.next < 0 && high > low && data[accEnd + high * 3 - 3] == 65535) {
			state = data[accEnd + high * 3 - 1];
			continue scan;
		}
		for (; low < high;) {
			let mid = low + high >> 1;
			let index = accEnd + mid + (mid << 1);
			let from = data[index], to = data[index + 1] || 65536;
			if (next < from) high = mid;
			else if (next >= to) low = mid + 1;
			else {
				state = data[index + 2];
				input.advance();
				continue scan;
			}
		}
		break;
	}
}
function findOffset(data, start, term) {
	for (let i = start, next; (next = data[i]) != 65535; i++) if (next == term) return i - start;
	return -1;
}
function overrides(token, prev, tableData, tableOffset) {
	let iPrev = findOffset(tableData, tableOffset, prev);
	return iPrev < 0 || findOffset(tableData, tableOffset, token) < iPrev;
}
var verbose = typeof process != "undefined" && process.env && /\bparse\b/.test(process.env.LOG);
var stackIDs = null;
function cutAt(tree, pos, side) {
	let cursor = tree.cursor(IterMode.IncludeAnonymous);
	cursor.moveTo(pos);
	for (;;) if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos))) for (;;) {
		if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError) return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25)) : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25));
		if (side < 0 ? cursor.prevSibling() : cursor.nextSibling()) break;
		if (!cursor.parent()) return side < 0 ? 0 : tree.length;
	}
}
var FragmentCursor = class {
	constructor(fragments, minRepeat) {
		this.fragments = fragments;
		this.minRepeat = minRepeat;
		this.i = 0;
		this.fragment = null;
		this.safeFrom = -1;
		this.safeTo = -1;
		this.trees = [];
		this.start = [];
		this.index = [];
		this.lastRepeat = null;
		this.lastRepeatPos = -1;
		this.nextFragment();
	}
	nextFragment() {
		let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
		if (fr) {
			this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
			this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
			while (this.trees.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
			}
			this.trees.push(fr.tree);
			this.start.push(-fr.offset);
			this.index.push(0);
			this.nextStart = this.safeFrom;
		} else this.nextStart = 1e9;
	}
	nodeAt(pos) {
		if (pos < this.nextStart) return null;
		while (this.fragment && this.safeTo <= pos) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let last = this.trees.length - 1;
			if (last < 0) {
				this.nextFragment();
				return null;
			}
			let top = this.trees[last], index = this.index[last];
			if (index == top.children.length) {
				this.trees.pop();
				this.start.pop();
				this.index.pop();
				continue;
			}
			let next = top.children[index];
			let start = this.start[last] + top.positions[index];
			if (start > pos) {
				this.nextStart = start;
				return null;
			}
			if (next instanceof Tree) {
				let storeRepeat = start > this.lastRepeatPos && next.type.id >= this.minRepeat;
				if (start == pos || storeRepeat) {
					let end = start + next.length, lookahead;
					if (start >= this.safeFrom && end <= this.safeTo && (!(lookahead = next.prop(NodeProp.lookAhead)) || end + lookahead < this.fragment.to)) {
						if (storeRepeat) {
							this.lastRepeat = next;
							this.lastRepeatPos = start;
						}
						if (start == pos) return next;
					} else if (start == pos) return null;
				}
				this.index[last]++;
				if (start + next.length >= Math.max(this.safeFrom, pos)) {
					this.trees.push(next);
					this.start.push(start);
					this.index.push(0);
				}
			} else {
				this.index[last]++;
				this.nextStart = start + next.length;
			}
		}
	}
};
var TokenCache = class {
	constructor(parser, stream) {
		this.stream = stream;
		this.tokens = [];
		this.mainToken = null;
		this.actions = [];
		this.tokens = parser.tokenizers.map((_) => new CachedToken());
	}
	getActions(stack) {
		let actionIndex = 0;
		let main = null;
		let { parser } = stack.p, { tokenizers } = parser;
		let mask = parser.stateSlot(stack.state, 3);
		let context = stack.curContext ? stack.curContext.hash : 0;
		let lookAhead = 0;
		for (let i = 0; i < tokenizers.length; i++) {
			if ((1 << i & mask) == 0) continue;
			let tokenizer = tokenizers[i], token = this.tokens[i];
			if (main && !tokenizer.fallback) continue;
			if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
				this.updateCachedToken(token, tokenizer, stack);
				token.mask = mask;
				token.context = context;
			}
			if (token.lookAhead > token.end + 25) lookAhead = Math.max(token.lookAhead, lookAhead);
			if (token.value != 0) {
				let startIndex = actionIndex;
				if (token.extended > -1) actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
				actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
				if (!tokenizer.extend) {
					main = token;
					if (actionIndex > startIndex) break;
				}
			}
		}
		while (this.actions.length > actionIndex) this.actions.pop();
		if (lookAhead) stack.setLookAhead(lookAhead);
		if (!main && stack.pos == this.stream.end) {
			main = new CachedToken();
			main.value = stack.p.parser.eofTerm;
			main.start = main.end = stack.pos;
			actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
		}
		this.mainToken = main;
		return this.actions;
	}
	getMainToken(stack) {
		if (this.mainToken) return this.mainToken;
		let main = new CachedToken(), { pos, p } = stack;
		main.start = pos;
		main.end = Math.min(pos + 1, p.stream.end);
		main.value = pos == p.stream.end ? p.parser.eofTerm : 0;
		return main;
	}
	updateCachedToken(token, tokenizer, stack) {
		let start = this.stream.clipPos(stack.pos);
		tokenizer.token(this.stream.reset(start, token), stack);
		if (token.value > -1) {
			let { parser } = stack.p;
			for (let i = 0; i < parser.specialized.length; i++) if (parser.specialized[i] == token.value) {
				let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
				if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
					if ((result & 1) == 0) token.value = result >> 1;
					else token.extended = result >> 1;
					break;
				}
			}
		} else {
			token.value = 0;
			token.end = this.stream.clipPos(start + 1);
		}
	}
	putAction(action, token, end, index) {
		for (let i = 0; i < index; i += 3) if (this.actions[i] == action) return index;
		this.actions[index++] = action;
		this.actions[index++] = token;
		this.actions[index++] = end;
		return index;
	}
	addActions(stack, token, end, index) {
		let { state } = stack, { parser } = stack.p, { data } = parser;
		for (let set = 0; set < 2; set++) for (let i = parser.stateSlot(state, set ? 2 : 1);; i += 3) {
			if (data[i] == 65535) {
				if (data[i + 1] == 1) i = pair(data, i + 2);
				else {
					if (index == 0 && data[i + 1] == 2) index = this.putAction(pair(data, i + 2), token, end, index);
					break;
				}
			}
			if (data[i] == token) index = this.putAction(pair(data, i + 1), token, end, index);
		}
		return index;
	}
};
var Parse = class {
	constructor(parser, input, fragments, ranges) {
		this.parser = parser;
		this.input = input;
		this.ranges = ranges;
		this.recovering = 0;
		this.nextStackID = 9812;
		this.minStackPos = 0;
		this.reused = [];
		this.stoppedAt = null;
		this.lastBigReductionStart = -1;
		this.lastBigReductionSize = 0;
		this.bigReductionCount = 0;
		this.stream = new InputStream(input, ranges);
		this.tokens = new TokenCache(parser, this.stream);
		this.topTerm = parser.top[1];
		let { from } = ranges[0];
		this.stacks = [Stack.start(this, parser.top[0], from)];
		this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4 ? new FragmentCursor(fragments, parser.minRepeatTerm) : null;
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let stacks = this.stacks, pos = this.minStackPos;
		let newStacks = this.stacks = [];
		let stopped, stoppedTokens;
		if (this.bigReductionCount > 300 && stacks.length == 1) {
			let [s] = stacks;
			while (s.forceReduce() && s.stack.length && s.stack[s.stack.length - 2] >= this.lastBigReductionStart);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i];
			for (;;) {
				this.tokens.mainToken = null;
				if (stack.pos > pos) newStacks.push(stack);
				else if (this.advanceStack(stack, newStacks, stacks)) continue;
				else {
					if (!stopped) {
						stopped = [];
						stoppedTokens = [];
					}
					stopped.push(stack);
					let tok = this.tokens.getMainToken(stack);
					stoppedTokens.push(tok.value, tok.end);
				}
				break;
			}
		}
		if (!newStacks.length) {
			let finished = stopped && findFinished(stopped);
			if (finished) {
				if (verbose) console.log("Finish with " + this.stackID(finished));
				return this.stackToTree(finished);
			}
			if (this.parser.strict) {
				if (verbose && stopped) console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
				throw new SyntaxError("No parse at " + pos);
			}
			if (!this.recovering) this.recovering = 5;
		}
		if (this.recovering && stopped) {
			let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0] : this.runRecovery(stopped, stoppedTokens, newStacks);
			if (finished) {
				if (verbose) console.log("Force-finish " + this.stackID(finished));
				return this.stackToTree(finished.forceAll());
			}
		}
		if (this.recovering) {
			let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3;
			if (newStacks.length > maxRemaining) {
				newStacks.sort((a, b) => b.score - a.score);
				while (newStacks.length > maxRemaining) newStacks.pop();
			}
			if (newStacks.some((s) => s.reducePos > pos)) this.recovering--;
		} else if (newStacks.length > 1) {
			outer: for (let i = 0; i < newStacks.length - 1; i++) {
				let stack = newStacks[i];
				for (let j = i + 1; j < newStacks.length; j++) {
					let other = newStacks[j];
					if (stack.sameState(other) || stack.buffer.length > 500 && other.buffer.length > 500) {
						if ((stack.score - other.score || stack.buffer.length - other.buffer.length) > 0) newStacks.splice(j--, 1);
						else {
							newStacks.splice(i--, 1);
							continue outer;
						}
					}
				}
			}
			if (newStacks.length > 12) {
				newStacks.sort((a, b) => b.score - a.score);
				newStacks.splice(12, newStacks.length - 12);
			}
		}
		this.minStackPos = newStacks[0].pos;
		for (let i = 1; i < newStacks.length; i++) if (newStacks[i].pos < this.minStackPos) this.minStackPos = newStacks[i].pos;
		return null;
	}
	stopAt(pos) {
		if (this.stoppedAt != null && this.stoppedAt < pos) throw new RangeError("Can't move stoppedAt forward");
		this.stoppedAt = pos;
	}
	tryReuse(stack, start, tree, repeatOnly) {
		if (!tree) return null;
		let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
		for (; tree;) {
			let match = this.parser.nodeSet.types[tree.type.id] != tree.type ? -1 : this.parser.getGoto(stack.state, tree.type.id);
			if (match > -1 && tree.length && (!strictCx || (tree.prop(NodeProp.contextHash) || 0) == cxHash)) {
				stack.useNode(tree, match, start);
				return tree;
			}
			if (tree.children.length == 0 || tree.positions[0] > 0) break;
			let inner = tree.children[0];
			if (inner instanceof Tree && (!repeatOnly || inner.type.id >= this.parser.minRepeatTerm)) tree = inner;
			else break;
		}
		return null;
	}
	advanceStack(stack, stacks, split) {
		let start = stack.pos, { parser } = this;
		let base = verbose ? this.stackID(stack) + " -> " : "";
		if (this.stoppedAt != null && start > this.stoppedAt) return stack.forceReduce() ? stack : null;
		if (this.fragments) {
			let reused = stack.reducePos < start && stack.buffer.length && stack.buffer[stack.buffer.length - 2] <= stack.reducePos && this.fragments.lastRepeatPos == stack.reducePos && this.tryReuse(stack, stack.reducePos, this.fragments.lastRepeat, true) || this.tryReuse(stack, start, this.fragments.nodeAt(start), false);
			if (reused) {
				if (verbose) console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(reused.type.id)})`);
				return true;
			}
		}
		let defaultReduce = parser.stateSlot(stack.state, 4);
		if (defaultReduce > 0) {
			stack.reduce(defaultReduce);
			if (verbose) console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535)})`);
			return true;
		}
		if (stack.stack.length >= 8400) while (stack.stack.length > 6e3 && stack.forceReduce());
		let actions = this.tokens.getActions(stack);
		for (let i = 0; i < actions.length;) {
			let action = actions[i++], term = actions[i++], end = actions[i++];
			let last = i == actions.length || !split;
			let localStack = last ? stack : stack.split();
			let main = this.tokens.mainToken;
			localStack.apply(action, term, main ? main.start : localStack.pos, end);
			if (verbose) console.log(base + this.stackID(localStack) + ` (via ${(action & 65536) == 0 ? "shift" : `reduce of ${parser.getName(action & 65535)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
			if (last) return true;
			else if (localStack.pos > start) stacks.push(localStack);
			else split.push(localStack);
		}
		return false;
	}
	advanceFully(stack, newStacks) {
		let pos = stack.pos;
		for (;;) {
			if (!this.advanceStack(stack, null, null)) return false;
			if (stack.pos > pos) {
				pushStackDedup(stack, newStacks);
				return true;
			}
		}
	}
	runRecovery(stacks, tokens, newStacks) {
		let finished = null, restarted = false;
		for (let i = 0; i < stacks.length; i++) {
			let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
			let base = verbose ? this.stackID(stack) + " -> " : "";
			if (stack.deadEnd) {
				if (restarted) continue;
				restarted = true;
				stack.restart();
				if (verbose) console.log(base + this.stackID(stack) + " (restarted)");
				if (this.advanceFully(stack, newStacks)) continue;
			}
			let force = stack.split(), forceBase = base;
			for (let j = 0; j < 10 && force.forceReduce(); j++) {
				if (verbose) console.log(forceBase + this.stackID(force) + " (via force-reduce)");
				if (this.advanceFully(force, newStacks)) break;
				if (verbose) forceBase = this.stackID(force) + " -> ";
			}
			for (let insert of stack.recoverByInsert(token)) {
				if (verbose) console.log(base + this.stackID(insert) + " (via recover-insert)");
				this.advanceFully(insert, newStacks);
			}
			if (this.stream.end > stack.pos) {
				if (tokenEnd == stack.pos) {
					tokenEnd++;
					token = 0;
				}
				stack.recoverByDelete(token, tokenEnd);
				if (verbose) console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
				pushStackDedup(stack, newStacks);
			} else if (!finished || finished.score < force.score) finished = force;
		}
		return finished;
	}
	stackToTree(stack) {
		stack.close();
		return Tree.build({
			buffer: StackBufferCursor.create(stack),
			nodeSet: this.parser.nodeSet,
			topID: this.topTerm,
			maxBufferLength: this.parser.bufferLength,
			reused: this.reused,
			start: this.ranges[0].from,
			length: stack.pos - this.ranges[0].from,
			minRepeatType: this.parser.minRepeatTerm
		});
	}
	stackID(stack) {
		let id = (stackIDs || (stackIDs = /* @__PURE__ */ new WeakMap())).get(stack);
		if (!id) stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
		return id + stack;
	}
};
function pushStackDedup(stack, newStacks) {
	for (let i = 0; i < newStacks.length; i++) {
		let other = newStacks[i];
		if (other.pos == stack.pos && other.sameState(stack)) {
			if (newStacks[i].score < stack.score) newStacks[i] = stack;
			return;
		}
	}
	newStacks.push(stack);
}
var Dialect = class {
	constructor(source, flags, disabled) {
		this.source = source;
		this.flags = flags;
		this.disabled = disabled;
	}
	allows(term) {
		return !this.disabled || this.disabled[term] == 0;
	}
};
var id = (x) => x;
/**
Context trackers are used to track stateful context (such as
indentation in the Python grammar, or parent elements in the XML
grammar) needed by external tokenizers. You declare them in a
grammar file as `@context exportName from "module"`.

Context values should be immutable, and can be updated (replaced)
on shift or reduce actions.

The export used in a `@context` declaration should be of this
type.
*/
var ContextTracker = class {
	/**
	Define a context tracker.
	*/
	constructor(spec) {
		this.start = spec.start;
		this.shift = spec.shift || id;
		this.reduce = spec.reduce || id;
		this.reuse = spec.reuse || id;
		this.hash = spec.hash || (() => 0);
		this.strict = spec.strict !== false;
	}
};
/**
Holds the parse tables for a given grammar, as generated by
`lezer-generator`, and provides [methods](#common.Parser) to parse
content with.
*/
var LRParser = class LRParser extends Parser {
	/**
	@internal
	*/
	constructor(spec) {
		super();
		/**
		@internal
		*/
		this.wrappers = [];
		if (spec.version != 14) throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (14)`);
		let nodeNames = spec.nodeNames.split(" ");
		this.minRepeatTerm = nodeNames.length;
		for (let i = 0; i < spec.repeatNodeCount; i++) nodeNames.push("");
		let topTerms = Object.keys(spec.topRules).map((r) => spec.topRules[r][1]);
		let nodeProps = [];
		for (let i = 0; i < nodeNames.length; i++) nodeProps.push([]);
		function setProp(nodeID, prop, value) {
			nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
		}
		if (spec.nodeProps) for (let propSpec of spec.nodeProps) {
			let prop = propSpec[0];
			if (typeof prop == "string") prop = NodeProp[prop];
			for (let i = 1; i < propSpec.length;) {
				let next = propSpec[i++];
				if (next >= 0) setProp(next, prop, propSpec[i++]);
				else {
					let value = propSpec[i + -next];
					for (let j = -next; j > 0; j--) setProp(propSpec[i++], prop, value);
					i++;
				}
			}
		}
		this.nodeSet = new NodeSet(nodeNames.map((name, i) => NodeType.define({
			name: i >= this.minRepeatTerm ? void 0 : name,
			id: i,
			props: nodeProps[i],
			top: topTerms.indexOf(i) > -1,
			error: i == 0,
			skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
		})));
		if (spec.propSources) this.nodeSet = this.nodeSet.extend(...spec.propSources);
		this.strict = false;
		this.bufferLength = DefaultBufferLength;
		let tokenArray = decodeArray(spec.tokenData);
		this.context = spec.context;
		this.specializerSpecs = spec.specialized || [];
		this.specialized = new Uint16Array(this.specializerSpecs.length);
		for (let i = 0; i < this.specializerSpecs.length; i++) this.specialized[i] = this.specializerSpecs[i].term;
		this.specializers = this.specializerSpecs.map(getSpecializer);
		this.states = decodeArray(spec.states, Uint32Array);
		this.data = decodeArray(spec.stateData);
		this.goto = decodeArray(spec.goto);
		this.maxTerm = spec.maxTerm;
		this.tokenizers = spec.tokenizers.map((value) => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
		this.topRules = spec.topRules;
		this.dialects = spec.dialects || {};
		this.dynamicPrecedences = spec.dynamicPrecedences || null;
		this.tokenPrecTable = spec.tokenPrec;
		this.termNames = spec.termNames || null;
		this.maxNode = this.nodeSet.types.length - 1;
		this.dialect = this.parseDialect();
		this.top = this.topRules[Object.keys(this.topRules)[0]];
	}
	createParse(input, fragments, ranges) {
		let parse = new Parse(this, input, fragments, ranges);
		for (let w of this.wrappers) parse = w(parse, input, fragments, ranges);
		return parse;
	}
	/**
	Get a goto table entry @internal
	*/
	getGoto(state, term, loose = false) {
		let table = this.goto;
		if (term >= table[0]) return -1;
		for (let pos = table[term + 1];;) {
			let groupTag = table[pos++], last = groupTag & 1;
			let target = table[pos++];
			if (last && loose) return target;
			for (let end = pos + (groupTag >> 1); pos < end; pos++) if (table[pos] == state) return target;
			if (last) return -1;
		}
	}
	/**
	Check if this state has an action for a given terminal @internal
	*/
	hasAction(state, terminal) {
		let data = this.data;
		for (let set = 0; set < 2; set++) for (let i = this.stateSlot(state, set ? 2 : 1), next;; i += 3) {
			if ((next = data[i]) == 65535) {
				if (data[i + 1] == 1) next = data[i = pair(data, i + 2)];
				else if (data[i + 1] == 2) return pair(data, i + 2);
				else break;
			}
			if (next == terminal || next == 0) return pair(data, i + 1);
		}
		return 0;
	}
	/**
	@internal
	*/
	stateSlot(state, slot) {
		return this.states[state * 6 + slot];
	}
	/**
	@internal
	*/
	stateFlag(state, flag) {
		return (this.stateSlot(state, 0) & flag) > 0;
	}
	/**
	@internal
	*/
	validAction(state, action) {
		return !!this.allActions(state, (a) => a == action ? true : null);
	}
	/**
	@internal
	*/
	allActions(state, action) {
		let deflt = this.stateSlot(state, 4);
		let result = deflt ? action(deflt) : void 0;
		for (let i = this.stateSlot(state, 1); result == null; i += 3) {
			if (this.data[i] == 65535) {
				if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
				else break;
			}
			result = action(pair(this.data, i + 1));
		}
		return result;
	}
	/**
	Get the states that can follow this one through shift actions or
	goto jumps. @internal
	*/
	nextStates(state) {
		let result = [];
		for (let i = this.stateSlot(state, 1);; i += 3) {
			if (this.data[i] == 65535) {
				if (this.data[i + 1] == 1) i = pair(this.data, i + 2);
				else break;
			}
			if ((this.data[i + 2] & 1) == 0) {
				let value = this.data[i + 1];
				if (!result.some((v, i) => i & 1 && v == value)) result.push(this.data[i], value);
			}
		}
		return result;
	}
	/**
	Configure the parser. Returns a new parser instance that has the
	given settings modified. Settings not provided in `config` are
	kept from the original parser.
	*/
	configure(config) {
		let copy = Object.assign(Object.create(LRParser.prototype), this);
		if (config.props) copy.nodeSet = this.nodeSet.extend(...config.props);
		if (config.top) {
			let info = this.topRules[config.top];
			if (!info) throw new RangeError(`Invalid top rule name ${config.top}`);
			copy.top = info;
		}
		if (config.tokenizers) copy.tokenizers = this.tokenizers.map((t) => {
			let found = config.tokenizers.find((r) => r.from == t);
			return found ? found.to : t;
		});
		if (config.specializers) {
			copy.specializers = this.specializers.slice();
			copy.specializerSpecs = this.specializerSpecs.map((s, i) => {
				let found = config.specializers.find((r) => r.from == s.external);
				if (!found) return s;
				let spec = Object.assign(Object.assign({}, s), { external: found.to });
				copy.specializers[i] = getSpecializer(spec);
				return spec;
			});
		}
		if (config.contextTracker) copy.context = config.contextTracker;
		if (config.dialect) copy.dialect = this.parseDialect(config.dialect);
		if (config.strict != null) copy.strict = config.strict;
		if (config.wrap) copy.wrappers = copy.wrappers.concat(config.wrap);
		if (config.bufferLength != null) copy.bufferLength = config.bufferLength;
		return copy;
	}
	/**
	Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
	are registered for this parser.
	*/
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	/**
	Returns the name associated with a given term. This will only
	work for all terms when the parser was generated with the
	`--names` option. By default, only the names of tagged terms are
	stored.
	*/
	getName(term) {
		return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
	}
	/**
	The eof term id is always allocated directly after the node
	types. @internal
	*/
	get eofTerm() {
		return this.maxNode + 1;
	}
	/**
	The type of top node produced by the parser.
	*/
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	/**
	@internal
	*/
	dynamicPrecedence(term) {
		let prec = this.dynamicPrecedences;
		return prec == null ? 0 : prec[term] || 0;
	}
	/**
	@internal
	*/
	parseDialect(dialect) {
		let values = Object.keys(this.dialects), flags = values.map(() => false);
		if (dialect) for (let part of dialect.split(" ")) {
			let id = values.indexOf(part);
			if (id >= 0) flags[id] = true;
		}
		let disabled = null;
		for (let i = 0; i < values.length; i++) if (!flags[i]) for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535;) (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
		return new Dialect(dialect, flags, disabled);
	}
	/**
	Used by the output of the parser generator. Not available to
	user code. @hide
	*/
	static deserialize(spec) {
		return new LRParser(spec);
	}
};
function pair(data, off) {
	return data[off] | data[off + 1] << 16;
}
function findFinished(stacks) {
	let best = null;
	for (let stack of stacks) {
		let stopped = stack.p.stoppedAt;
		if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) && stack.p.parser.stateFlag(stack.state, 2) && (!best || best.score < stack.score)) best = stack;
	}
	return best;
}
function getSpecializer(spec) {
	if (spec.external) {
		let mask = spec.extend ? 1 : 0;
		return (value, stack) => spec.external(value, stack) << 1 | mask;
	}
	return spec.get;
}
//#endregion
//#region node_modules/@lezer/css/dist/index.js
var descendantOp = 148;
var Unit = 1;
var identifier$1 = 149;
var callee = 150;
var VariableName = 2;
var queryIdentifier = 151;
var queryVariableName = 3;
var QueryCallee = 4;
var hashNameColor = 152;
var space = [
	9,
	10,
	11,
	12,
	13,
	32,
	133,
	160,
	5760,
	8192,
	8193,
	8194,
	8195,
	8196,
	8197,
	8198,
	8199,
	8200,
	8201,
	8202,
	8232,
	8233,
	8239,
	8287,
	12288
];
var colon = 58;
var parenL = 40;
var underscore = 95;
var bracketL = 91;
var dash = 45;
var period = 46;
var hash = 35;
var percent = 37;
var ampersand = 38;
var backslash = 92;
var newline = 10;
var asterisk = 42;
function isAlpha(ch) {
	return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 161;
}
function isDigit(ch) {
	return ch >= 48 && ch <= 57;
}
function isHex(ch) {
	return isDigit(ch) || ch >= 97 && ch <= 102 || ch >= 65 && ch <= 70;
}
var identifierTokens = (id, varName, callee) => (input, stack) => {
	for (let inside = false, dashes = 0, i = 0;; i++) {
		let { next } = input;
		if (isAlpha(next) || next == dash || next == underscore || inside && isDigit(next)) {
			if (!inside && (next != dash || i > 0)) inside = true;
			if (dashes === i && next == dash) dashes++;
			input.advance();
		} else if (next == backslash && input.peek(1) != newline) {
			input.advance();
			if (isHex(input.next)) {
				do
					input.advance();
				while (isHex(input.next));
				if (input.next == 32) input.advance();
			} else if (input.next > -1) input.advance();
			inside = true;
		} else {
			if (inside) input.acceptToken(dashes >= 2 && stack.canShift(VariableName) ? varName : next == parenL ? callee : id);
			break;
		}
	}
};
var identifiers = new ExternalTokenizer(identifierTokens(identifier$1, VariableName, callee), { contextual: true });
var queryIdentifiers = new ExternalTokenizer(identifierTokens(queryIdentifier, queryVariableName, QueryCallee), { contextual: true });
var descendant = new ExternalTokenizer((input) => {
	if (space.includes(input.peek(-1))) {
		let { next } = input;
		if (isAlpha(next) || next == underscore || next == hash || next == period || next == asterisk || next == bracketL || next == colon && isAlpha(input.peek(1)) || next == dash || next == ampersand) input.acceptToken(descendantOp);
	}
});
var unitToken = new ExternalTokenizer((input) => {
	if (!space.includes(input.peek(-1))) {
		let { next } = input;
		if (next == percent) {
			input.advance();
			input.acceptToken(Unit);
		}
		if (isAlpha(next)) {
			do
				input.advance();
			while (isAlpha(input.next) || isDigit(input.next));
			input.acceptToken(Unit);
		}
	}
});
function hashColor(name) {
	let l = name.length;
	return (l == 4 || l == 5 || l == 7 || l == 9) && /^#[a-f\d]+$/i.test(name) ? hashNameColor : -1;
}
var cssHighlighting = styleTags({
	"AtKeyword import charset namespace keyframes media supports font-feature-values": tags$1.definitionKeyword,
	"from to selector scope MatchFlag": tags$1.keyword,
	NamespaceName: tags$1.namespace,
	KeyframeName: tags$1.labelName,
	KeyframeRangeName: tags$1.operatorKeyword,
	TagName: tags$1.tagName,
	ClassName: tags$1.className,
	PseudoClassName: tags$1.constant(tags$1.className),
	IdName: tags$1.labelName,
	"FeatureName PropertyName": tags$1.propertyName,
	AttributeName: tags$1.attributeName,
	NumberLiteral: tags$1.number,
	KeywordQuery: tags$1.keyword,
	UnaryQueryOp: tags$1.operatorKeyword,
	"CallTag ValueName FontName": tags$1.atom,
	VariableName: tags$1.variableName,
	Callee: tags$1.operatorKeyword,
	Unit: tags$1.unit,
	"UniversalSelector NestingSelector": tags$1.definitionOperator,
	"MatchOp CompareOp": tags$1.compareOperator,
	"ChildOp SiblingOp, LogicOp": tags$1.logicOperator,
	BinOp: tags$1.arithmeticOperator,
	Important: tags$1.modifier,
	Comment: tags$1.blockComment,
	ColorLiteral: tags$1.color,
	"ParenthesizedContent StringLiteral": tags$1.string,
	":": tags$1.punctuation,
	"PseudoOp": tags$1.derefOperator,
	"; , |": tags$1.separator,
	"( )": tags$1.paren,
	"[ ]": tags$1.squareBracket,
	"{ }": tags$1.brace
});
var spec_callee = {
	__proto__: null,
	lang: 44,
	"nth-child": 44,
	"nth-last-child": 44,
	"nth-of-type": 44,
	"nth-last-of-type": 44,
	dir: 44,
	"host-context": 44,
	if: 88,
	url: 158,
	"url-prefix": 158,
	domain: 158,
	regexp: 158
};
var spec_queryIdentifier = {
	__proto__: null,
	or: 102,
	and: 102,
	not: 112,
	only: 112,
	layer: 212
};
var spec_QueryCallee = {
	__proto__: null,
	selector: 118,
	style: 124,
	layer: 208
};
var spec_AtKeyword = {
	__proto__: null,
	"@import": 204,
	"@media": 216,
	"@charset": 220,
	"@namespace": 224,
	"@keyframes": 230,
	"@supports": 242,
	"@scope": 246,
	"@font-feature-values": 252
};
var spec_identifier = {
	__proto__: null,
	to: 249
};
var parser = LRParser.deserialize({
	version: 14,
	states: "MrQYQdOOO$TQdOOP$[O`OOO%XQaO'#CfOOQP'#Ce'#CeO%`QdO'#CgO%eQ`O'#CgO%jQaO'#FrO&eQdO'#CkO'XQaO'#CcO'cQdO'#CnOOQP'#ES'#ESOOQP'#ER'#ERO'nQdO'#ETO'yQdO'#E[O'yQdO'#E_OOQP'#Fr'#FrO)`QhO'#FQOOQS'#Fq'#FqOOQS'#FT'#FTQYQdOOO)gQdO'#EeO*vQhO'#EkO)gQdO'#EmO*}QdO'#EoO+YQdO'#ErO*[QhO'#ExO+bQdO'#EzO+mQdO'#E}O+rQaO'#CfO+yQ`O'#EbO,OQ`O'#GPO,ZQdO'#GPQOQ`OOP,eO&jO'#CaPOOO)CAa)CAaOOQP'#Ci'#CiOOQP,59R,59RO%`QdO,59ROOQP'#Cm'#CmOOQP,59V,59VO&eQdO,59VO,pQdO,59YOOQP,5:m,5:mO'nQdO,5:oO'yQdO,5:vO'yQdO,5:xO'yQdO,5:yO'yQdO'#F[O,{Q`O,58}O-TQdO'#EaOOQS,58},58}OOQP'#Cq'#CqOOQO'#EP'#EPOOQP,59Y,59YO-[Q`O,59YO-aQ`O,59YO-fQpO'#EUO-qQdO'#EVO-vQ`O'#EVO-{QpO,5:oO.iQaO,5:vO/PQaO,5:yOOQW'#D]'#D]O0OQhO'#DgO0cQhO,5;lO*[QhO'#DeO0pQ`O'#DnO0uQhO'#D{OOQW'#Fx'#FxOOQS,5;l,5;lO0zQ`O'#DhO1PQ`O'#DkOOQS-E9R-E9ROOQ['#Cv'#CvO1UQdO'#CwO1iQdO'#C|O1|QdO'#DPOOQ['#DQ'#DQO2aQ!pO'#DRO4jQ!jO,5;POOQO'#DW'#DWO-aQ`O'#DVO4zQ!nO'#FuO6}Q`O'#DXO7SQ`O'#D|OOQ['#Fu'#FuO7XQhO'#GSO7gQ`O,5;VO7lQ!bO,5;XOOQS'#Eq'#EqO7tQ`O,5;ZO7yQdO,5;ZOOQO'#Et'#EtO8RQ`O,5;^O8WQhO,5;dO'yQdO'#DjOOQS,5;f,5;fO0zQ`O,5;fO8`QdO,5;fOOQS'#Fc'#FcO8hQdO'#FPO7gQ`O,5;iO8pQdO,5:|O9QQdO'#F^O9_Q`O,5<kO9_Q`O,5<kPOOO'#FS'#FSP9jO&jO,58{POOO,58{,58{OOQP1G.m1G.mOOQP1G.q1G.qOOQP1G.t1G.tO-[Q`O1G.tO-aQ`O1G.tO9uQpO1G0ZO9}QaO1G0bO:eQaO1G0dO:{QaO1G0eO;cQaO,5;vOOQO-E9Y-E9YOOQS1G.i1G.iO;mQ`O,5:{O;rQdO'#EQO;yQdO'#CuOOQO'#EX'#EXOOQO,5:q,5:qO-qQdO,5:qOOQP1G0Z1G0ZO)gQdO1G0ZO<QQ!jO'#D]O<`Q!bO,59xO<hQhO,5:ROOQO'#Dc'#DcOOQO'#Fy'#FyO<cQ!bO,59|O<pQhO'#FdO*[QhO,59zO*[QhO'#FdO=hQhO1G1WOOQS1G1W1G1WO=rQhO,5:PO>mQhO'#DoOOQW,5:Y,5:YOOQW,5:g,5:gOOQW,5:S,5:SO>wQhO,5:VO?cQ!fO'#FvOOQS'#Fv'#FvOOQS'#FV'#FVO@pQdO,59cOOQ[,59c,59cOATQdO,59hOOQ[,59h,59hOAhQdO,59kOOQ[,59k,59kOOQ[,59m,59mO)gQdO,59oOA{QhO'#EgOOQW'#Eg'#EgOBjQ`O1G0kO4sQhO1G0kOOQ[,59q,59qO*[QhO'#DZOOQ[,59s,59sOBoQ#tO,5:hOBzQhO'#F`OCXQ`O,5<nOOQS1G0q1G0qOOQS1G0s1G0sOOQS1G0u1G0uOCdQ`O1G0uOCiQdO'#EuOOQS1G0x1G0xOOQS1G1O1G1OOCtQaO,5:UO7gQ`O1G1QOOQS1G1Q1G1QO0zQ`O1G1QOOQS-E9a-E9aOOQS1G1T1G1TOC{Q!fO1G0hODcQ`O'#EdOOQO1G0h1G0hOOQO,5;x,5;xODhQdO,5;xOOQO-E9[-E9[ODuQ`O1G2VPOOO-E9Q-E9QPOOO1G.g1G.gOOQP7+$`7+$`OOQP7+%u7+%uO)gQdO7+%uOOQS1G0g1G0gOEQQaO'#F}OE[Q`O,5:lOEaQ!fO'#FUOF_QdO'#FtOFiQ`O,59aOOQO1G0]1G0]OFnQ!bO7+%uO)gQdO1G/dOFyQhO1G/hOOQW1G/m1G/mOOQW1G/f1G/fOG[QhO,5<OOOQW-E9b-E9bOOQS7+&r7+&rOHSQhO'#D]OHbQhO'#F|OHmQ`O'#F|OHrQ`O,5:ZOHwQ!bO'#D_O>wQhO'#DmOISQhO'#DsOI[QhO'#DuOIaQ!jO'#F{OOQO'#F{'#F{OIlQ`O'#DxOItQ!bO'#DzOOQO'#Fz'#FzOIyQ`O1G/qOOQS-E9T-E9TOOQ[1G.}1G.}OOQ[1G/S1G/SOOQ[1G/V1G/VOOQ[1G/Z1G/ZOJOQdO,5;ROOQS7+&V7+&VOJTQ`O7+&VOJYQhO'#D[OJbQ`O,59uO*[QhO,59uOOQ[1G0S1G0SOJjQ`O1G0SOJoQhO,5;zOOQO-E9^-E9^OOQS7+&a7+&aOJ}QbO'#DROOQO'#Ew'#EwOK]Q`O'#EvOOQO'#Ev'#EvOKhQ`O'#FaOKpQdO,5;aOOQS,5;a,5;aOOQ[1G/p1G/pOOQS7+&l7+&lO7gQ`O7+&lOK{Q!fO'#F]O)gQdO'#F]OMSQdO7+&SOOQO7+&S7+&SOOQO,5;O,5;OOOQO1G1d1G1dOMgQ!bO<<IaOMrQdO'#FZOM|Q`O,5<iOOQP1G0W1G0WOOQS-E9S-E9SONUQdO'#FYON`Q`O,5<`OOQ]1G.{1G.{OOQP<<Ia<<IaONhQ`O<<IaONmQdO7+%OOOQO'#D_'#D_ONtQ!bO7+%SON|QhO'#FXO! ZQ`O,5<hO)gQdO,5<hOOQW1G/u1G/uO! cQ`O,5:XO>wQhO'#DtOOQO,5:_,5:_O! hQhO,5:aO! pQhO,5:fO)gQdO,5:dOOQW7+%]7+%]OOQO'#Ei'#EiO! wQ`O1G0mOOQS<<Iq<<IqO)gQdO,59vO!!kQhO1G/aOOQ[1G/a1G/aO!!rQ`O1G/aOOQW-E9U-E9UOOQ[7+%n7+%nOOQO,5;b,5;bOClQdO'#FbOKhQ`O,5;{OOQS,5;{,5;{OOQS-E9_-E9_OOQS1G0{1G0{OOQS<<JW<<JWO!!zQ!fO,5;wOOQS-E9Z-E9ZOOQO<<In<<InOOQPAN>{AN>{O!$RQ`OAN>{O!$WQaO,5;uOOQO-E9X-E9XO!$bQdO,5;tOOQO-E9W-E9WOOQW<<Hj<<HjOOQW<<Hn<<HnO!$lQhO<<HnO!$}QhO'#D]O!%]QhO,5;sO!%hQ`O,5;sOOQO-E9V-E9VO!%mQdO1G2SO!%wQhO1G/sO!&PQ`O,5:`O>wQhO'#DwOOQO1G/{1G/{O!&UQ!bO1G0QO!&^QdO1G0OOJOQdO'#F_O!&eQ`O7+&XOOQW7+&X7+&XO!&mQ!bO1G/bOOQ[7+${7+${O!&xQhO7+${P!'PQ`O'#FWOOQO,5;|,5;|OOQO-E9`-E9`OOQS1G1g1G1gOOQPG24gG24gO!'UQ`OAN>YO)gQdO1G1_O!'ZQ`O7+'nOOQO1G/z1G/zO!'cQ`O,5:cO!'hQhO7+%lOOQO,5;y,5;yOOQO-E9]-E9]OOQW<<Is<<IsOOQ[<<Hg<<HgPOQW,5;r,5;rOOQWG23tG23tO!'oQdO7+&yOOQO1G/}1G/}OOQO<<IW<<IW",
	stateData: "!(R~O$`OS$aQQ~OWVO^`O`WOcYOdYOlaOo]O#P^O#S_O#YeO#`fO#bgO#dhO#giO#mjO#okO#rlO$ZRO$^ZO$gTO$rZO~OQnOWVO^`O`WOcYOdYOlaOo]O#P^O#S_O#YeO#`fO#bgO#dhO#giO#mjO#okO#rlO$ZmO$^ZO$gTO$rZO~O$X$sP~P!mO$arO~O`YXcYXdYXoYXrYX!eYX#PYX#SYX$YYX$^YX$g[X$rYX~OgYX~P$aO$ZtO~O$gvO~O$gvO`$fXc$fXd$fXo$fXr$fX!e$fX#P$fX#S$fX$Y$fX$^$fX$r$fXg$fX~O$ZwO~O`yOczOdzOo|O#P}O#S!PO$Y!OO$^ZO$rZO~Or!SO!e!QO~P&jOf!YO$Z!UO$[!VO~OW!]O$Z!ZO$g![O~OWVO^`O`WOcYOdYOo]O#P^O#S_O$ZRO$^ZO$gTO$rZO~OS!eOc!fOd!fOh!bOr!SO!Y!dO!]!iO!`!jO$]!aO~Om!hO~P(qOQ!uOh!mOo!nOr!oOv!xO|!vO!q!wO$Z!lO$[!sO$^!pO$k!qO~OS!eOc!fOd!fOh!bO!Y!dO!]!iO!`!jO$]!aO~Or$vP~P*[Ov!}O!q!wO$Z!|O~Ov#PO$Z#PO~Oh#SOr!SO#p#UO~O$Z#WO~Oc#VX~P$aOc#ZO~Om#[O$X$sXq$sX~O$X$sXq$sX~P!mO$b#_O$c#_O$d#aO~Of#fO$Z!UO$[!VO~Or!SO!e!QO~Oq$sP~P!mOh#oO~Oh#pO~On!xX!|!xX$g!zX~O$Z#qO~O$g#sO~On#tO!|#uO~O`yOczOdzOo|O$^ZO$rZO~Or#Oa!e#Oa#P#Oa#S#Oa$Y#Oag#Oa~P.TOr#Ra!e#Ra#P#Ra#S#Ra$Y#Rag#Ra~P.TOS!eOc!fOd!fOh!bO!Y!dO!]!iO!`!jO~OR#zOv#zO$]#vO$^#yO$k!qO~P/gOm$QO!T#}O!e$OO~P(qOh$SO~O$]$UO~Oh#SO~Oh$WO~O`$YOc$YOg$]Ol$YOm$YO~P)gO`$YOc$YOl$YOm$YOn$_O~P)gO`$YOc$YOl$YOm$YOq$aO~P)gOP$bOSuXcuXduXhuXmuXxuX!YuX!]uX!`uX#[uX#^uX$]uX!WuXQuX`uXguXluXouXruXvuX|uX!quX$ZuX$[uX$^uX$kuXnuXquX!euX$XuX$uuX!}uX~Ox$cO#[$dO#^$eOm$vP~P*[Oh#pOS$iXc$iXd$iXm$iXx$iX!Y$iX!]$iX!`$iX#[$iX#^$iX$]$iXQ$iX`$iXg$iXl$iXo$iXr$iXv$iX|$iX!q$iX$Z$iX$[$iX$^$iX$k$iXn$iXq$iX!e$iX$X$iX$u$iX!}$iX~Oh$iO~Oh$kO~O!T#}O!e$lOr$vXm$vX~Or!SO~Om$oOx$cO~Om$pO~Ov$qO!q!wO~Or$rO~Or!SO!T#}O~Or!SO#p$xO~O$Z#WOr#sX~O$u$|Om#Ua$X#Uaq#Ua~P)gOm$QX$X$QXq$QX~P!mOm#[O$X$saq$sa~O$b#_O$c#_O$d%TO~On%VO!|%WO~Or#Oi!e#Oi#P#Oi#S#Oi$Y#Oig#Oi~P.TOr#Qi!e#Qi#P#Qi#S#Qi$Y#Qig#Qi~P.TOr#Ri!e#Ri#P#Ri#S#Ri$Y#Rig#Ri~P.TOr$Oa!e$Oa~P&jOq%XO~Og$qP~P'yOg$hP~P)gOc!RXg!PX!T!PX!W!RX~Oc%aO!W%bO~Og%cO!T#}O~O!T#}OS$WXc$WXd$WXh$WXm$WXr$WX!Y$WX!]$WX!`$WX!e$WX$]$WX~Om%gO!e$OO~P(qO!T#}OS!Xac!Xad!Xah!Xam!Xar!Xa!Y!Xa!]!Xa!`!Xa!e!Xa$]!Xag!Xa~O$]%hOg$pP~P/gOR#zOS!eOh%mOv#zO!Y%nO$]%lO$^#yO$k!qO~Ox$cOQ$jX`$jXc$jXg$jXh$jXl$jXm$jXo$jXr$jXv$jX|$jX!q$jX$Z$jX$[$jX$^$jX$k$jXn$jXq$jX~O`$YOc$YOg%wOl$YOm$YO~P)gO`$YOc$YOl$YOm$YOn%xO~P)gO`$YOc$YOl$YOm$YOq%yO~P)gOh%{OS#ZXc#ZXd#ZXm#ZX!Y#ZX!]#ZX!`#ZX$]#ZX~Om%|O~Og&ROv&SO!r&SO~Or$SX!e$SXm$SX~P*[O!e$lOr$vam$va~Om&VO~Oq&^O$Z&XO$k&WO~Og&_O~P&jOx$cO!e&cO$u$|Om#Ui$X#Uiq#Ui~P)gO$t&fO~Om$Qa$X$Qaq$Qa~P!mOm#[O$X$siq$si~O!e&iOg$qX~P&jOg&kO~Ox$cOQ#xXg#xXh#xXo#xXr#xXv#xX|#xX!e#xX!q#xX$Z#xX$[#xX$^#xX$k#xX~O!e&mOg$hX~P)gOg&oO~On&pOx$cO!}&qO~OR#zOv#zO$]&sO$^#yO$k!qO~O!T#}OS$Wac$Wad$Wah$Wam$War$Wa!Y$Wa!]$Wa!`$Wa!e$Wa$]$Wa~Oc!dXg!PX!T!PX!e!PX~O!T#}O!e&uOg$pX~Oc&wO~Og&xO~Oc!mXg!mX!W!RX~OS!eOh&zO~O!T&|O~O!T&|O!W&}Og$oX~Oc'OOg!lX~O!W&}O~Og'PO~O$Z'QO~Om'SO~Oc'TO!T#}O~Og'VOm'UO~Og'YO~O!T#}Or$Sa!e$Sam$Sa~OP$bOruX!euXguX~O$k&WOr#jX!e#jX~Or!SO!e'[O~Oq'`O$Z&XO$k&WO~Ox$cOQ$PXh$PXm$PXo$PXr$PXv$PX|$PX!e$PX!q$PX$X$PX$Z$PX$[$PX$^$PX$k$PX$u$PXq$PX~O!e&cO$u$|Om#Uq$X#Uqq#Uq~P)gOn'eOx$cO!}'fO~Og#}X!e#}X~P'yO!e&iOg$qa~Og#|X!e#|X~P)gO!e&mOg$ha~On'eO~Og'kO~P)gOg'lO!W'mO~O$]'nOg#{X!e#{X~P/gO!e&uOg$pa~Og'sO~OS!eOh'uO~OS!eO~PFyO`'yOg'{O~OS#zac#zad#zah#za!Y#za!]#za!`#za$]#za~Og'}O~P!!POg'}Om(OO~Ox$cOQ$Pah$Pam$Pao$Par$Pav$Pa|$Pa!e$Pa!q$Pa$X$Pa$Z$Pa$[$Pa$^$Pa$k$Pa$u$Paq$Pa~On(TO~Og#}a!e#}a~P&jOg#|a!e#|a~P)gOR#zOv#zO$]&sO$^#yO$k&WO~Oc!fXg!PX!T!PX!e!PX~O!T#}Og#{a!e#{a~Oc(VO~O!e&uOg$pi~P)gOg!ai!T!ji~Og(XO~O!W(ZOg!ni~Og!li~P)gO`'yOg(^O~Ox$cOg!Oim!Oi~Og(_O~P!!POm(`O~Og(aO~O!e&uOg$pq~Og(cO~OS!eO~P!$lOg#{q!e#{q~P)gO$`!r$a$k`x#S~",
	goto: "8^$wPPPPP$xP${P%U%h%U%z&^P%UP&d%UPP&jPPP&p&z&zPPPP&zPP&z&z'jP&zP&z(m&zP)])`)f)f)x)fP)f*_P)fP)f)fP*j)fP*v*|+r+uP+x*v+{*v,O,U,X,_,X)f,ePP-Z-a%U-g%U.V.V.].aPP%UP%U%UP.g/c/p/w${P0QP0TP${P${P${P0Z${P0^0a0d0k${P${PP${P0p${P0s0y1Y1t2S2Y2d2j2p2v2|3W3^3d3j3p3vPPPPPPPPPPPP3|4VP4{5O6SP6[7U7k,X7w7zP7}PP8TRsQ_bOPdp!S#[%Pq`OP^_dp}!O!P!Q!S#S#[#o%P&iqSOP^_dp}!O!P!Q!S#S#[#o%P&iqUOP^_dp}!O!P!Q!S#S#[#o%P&iQuTR#bvQxWR#cyQ!WYR#dzQ#d!YS$h!t!uR%U#f!Z!xeg!m!n!o#Z#p#u$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(b!Y!xeg!m!n!o#Z#p#u$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bb#z!b$W%b%m&z&}'m'u(ZU&Z$r&]'[R'Z&Y!Z!teg!m!n!o#Z#p#u$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bR$j!vQ&P$iR'W&Qq!gafj!b!c!d!r#}$O$P$S$g$i$l&Q&uQ#w!bW%s$W%m&z'uQ&t%bQ'w&}Q(U'mR(d(Zc#z!b$W%b%m&z&}'m'u(ZQ#VkQ$V!iQ$v#UR&a$xX%q$W%m&z'up!gafj!b!c!d!r#}$O$P$S$g$i$l&Q&uW%p$W%m&z'uQ&{%nQ'v&|Q'w&}R(d(ZR$T!eR%j$SR'p&uR&{%nX%o$W%m&z'uR'v&|X%t$W%m&z'uX%r$W%m&z'u!Y!xeg!m!n!o#Z#p#u$[$^$`$c${%W%]%a&c&d&m&r&w'O'T'i'r'x(V(bQ!}hR$q#OQ!XYR#ezQ#d!XR%U#ep[OP^_dp}!O!P!Q!S#S#[#o%P&ie{X!_!`#h#i#j#k$u%Y'gQ!^]R#g|T!]]|Q#r![R%_#sQ!TXQ!haQ#TkQ#m!RQ$Q!cQ$n!zQ$t#RQ$w#VQ$z#YQ%g$PQ&`$vQ'^&[Q'a&aR(S']SoP!SQ#^pQ%O#[R&g%PZnPp!S#[%PQ$}#ZQ&e${R'd&dR$g!rQ'R%{R(['yR#OhR#QiR$s#QS&[$r&]R(Q'[V&Y$r&]'[R#YlQ#`rR%S#`QdOSpP!SU!kdp%PR%P#[Q%]#p[&l%]&r'i'r'x(bQ&r%aQ'i&mQ'r&wQ'x'OR(b(VQ$[!mQ$^!nQ$`!oV%v$[$^$`Q&Q$iR'X&QQ&v%iS'q&v(WR(W'rQ&n%]R'j&nQ&j%YR'h&jQ!RXR#l!RQ&d${R'c&dQ#]oS%Q#]%RR%R#^Q'z'RR(]'zQ$m!yR&U$mQ&]$rR'_&]Q']&[R(R']Q#XlR$y#XQ$P!cR%f$P_cOPdp!S#[%P^XOPdp!S#[%PQ!_^Q!`_Q#h}Q#i!OQ#j!PQ#k!QQ$u#SQ%Y#oR'g&iR%^#pQ!reQ!{g[$X!m!n!o$[$^$`Q${#Zh%[#p%]%a&m&r&w'O'i'r'x(V(bQ%`#uQ%z$cS&b${&dQ&h%WQ'b&cR'|'T]$Z!m!n!o$[$^$`Q!caU!yf!r$gQ#RjQ#x!bS#|!c$PQ$R!dQ%d#}Q%e$OQ%i$SS&O$i&QQ&T$lR'o&uQ#{!bW%s$W%m&z'uQ&t%bQ'w&}Q(U'mR(d(ZQ%u$WQ&y%mQ't&zR(Y'uR%k$SR%Z#oQqPR#n!SQ!zfQ$f!rR%}$g",
	nodeNames: "⚠ Unit VariableName VariableName QueryCallee Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NamespacedTagSelector NamespaceName TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue AtKeyword ; ] [ BracketedValue } { BracedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee IfExpression if ArgList IfBranch KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp ComparisonQuery ColorLiteral CompareOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector ParenthesizedSelector StyleQuery style ParenthesedQuery CallQuery ArgList PropertyName , PropertyName UnaryQuery ParenthesedQuery BinaryQuery ParenthesedQuery ParenthesedQuery StyleFeature PropertyName StyleRange PseudoQuery CallLiteral CallTag ParenthesizedContent PseudoClassName ArgList IdSelector IdName AttributeSelector AttributeName NamespacedAttribute NamespaceName AttributeName MatchOp MatchFlag ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block Declaration PropertyName Important ImportStatement import Layer layer LayerName layer MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports ScopeStatement scope to FontFeatureStatement font-feature-values FontName AtRule Styles",
	maxTerm: 176,
	nodeProps: [
		[
			"isolate",
			-2,
			5,
			38,
			""
		],
		[
			"openedBy",
			23,
			"(",
			30,
			"[",
			33,
			"{"
		],
		[
			"closedBy",
			24,
			")",
			31,
			"]",
			34,
			"}"
		]
	],
	propSources: [cssHighlighting],
	skippedNodes: [
		0,
		5,
		130
	],
	repeatNodeCount: 17,
	tokenData: "IO~R!bOX%ZX^&R^p%Zpq&Rqr)ers)vst+jtu/wuv%Zvw0qwx1Sxy2qyz3Sz{3X{|3r|}8e}!O8v!O!P9e!P!Q9|!Q![:u![!];p!]!^<l!^!_<}!_!`=y!`!a>^!a!b%Z!b!c?_!c!k%Z!k!lAl!l!u%Z!u!vAl!v!}%Z!}#OA}#O#P%Z#P#QB`#Q#R/w#R#]%Z#]#^Bq#^#g%Z#g#hAl#h#o%Z#o#pGU#p#qGg#q#rHO#r#sHa#s#y%Z#y#z&R#z$f%Z$f$g&R$g#BY%Z#BY#BZ&R#BZ$IS%Z$IS$I_&R$I_$I|%Z$I|$JO&R$JO$JT%Z$JT$JU&R$JU$KV%Z$KV$KW&R$KW&FU%Z&FU&FV&R&FV;'S%Z;'S;=`Hx<%lO%Z`%^SOy%jz;'S%j;'S;=`%{<%lO%j`%oS!r`Oy%jz;'S%j;'S;=`%{<%lO%j`&OP;=`<%l%j~&Wh$`~OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%j~'yh$`~!r`OX%jX^'r^p%jpq'rqy%jz#y%j#y#z'r#z$f%j$f$g'r$g#BY%j#BY#BZ'r#BZ$IS%j$IS$I_'r$I_$I|%j$I|$JO'r$JO$JT%j$JT$JU'r$JU$KV%j$KV$KW'r$KW&FU%j&FU&FV'r&FV;'S%j;'S;=`%{<%lO%jj)jS$uYOy%jz;'S%j;'S;=`%{<%lO%j~)yWOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d<%lO)v~*hOv~~*kRO;'S)v;'S;=`*t;=`O)v~*wXOY)vZr)vrs*cs#O)v#O#P*h#P;'S)v;'S;=`+d;=`<%l)v<%lO)v~+gP;=`<%l)vj+maOy%jz}%j}!O,r!O!Q%j!Q![,r![!c%j!c!},r!}#O%j#O#P.O#P#R%j#R#S,r#S#T%j#T#o,r#o$g%j$g;'S,r;'S;=`/q<%lO,rj,ya$rY!r`Oy%jz}%j}!O,r!O!Q%j!Q![,r![!c%j!c!},r!}#O%j#O#P.O#P#R%j#R#S,r#S#T%j#T#o,r#o$g%j$g;'S,r;'S;=`/q<%lO,rj.TV!r`OY,rYZ%jZy,ryz.jz;'S,r;'S;=`/q<%lO,rY.oX$rY}!O.j!Q![.j!c!}.j#O#P/[#R#S.j#T#o.j$g;'S.j;'S;=`/k<%lO.jY/_SOY.jZ;'S.j;'S;=`/k<%lO.jY/nP;=`<%l.jj/tP;=`<%l,rd/zUOy%jz!_%j!_!`0^!`;'S%j;'S;=`%{<%lO%jd0eS!|S!r`Oy%jz;'S%j;'S;=`%{<%lO%jb0vS^QOy%jz;'S%j;'S;=`%{<%lO%j~1VWOY1SZw1Swx*cx#O1S#O#P1o#P;'S1S;'S;=`2k<%lO1S~1rRO;'S1S;'S;=`1{;=`O1S~2OXOY1SZw1Swx*cx#O1S#O#P1o#P;'S1S;'S;=`2k;=`<%l1S<%lO1S~2nP;=`<%l1Sj2vShYOy%jz;'S%j;'S;=`%{<%lO%j~3XOg~n3`UWQxWOy%jz!_%j!_!`0^!`;'S%j;'S;=`%{<%lO%jj3yWxW#SQOy%jz!O%j!O!P4c!P!Q%j!Q![7h![;'S%j;'S;=`%{<%lO%jj4hU!r`Oy%jz!Q%j!Q![4z![;'S%j;'S;=`%{<%lO%jj5RY!r`$kYOy%jz!Q%j!Q![4z![!g%j!g!h5q!h#X%j#X#Y5q#Y;'S%j;'S;=`%{<%lO%jj5vY!r`Oy%jz{%j{|6f|}%j}!O6f!O!Q%j!Q![6}![;'S%j;'S;=`%{<%lO%jj6kU!r`Oy%jz!Q%j!Q![6}![;'S%j;'S;=`%{<%lO%jj7UU!r`$kYOy%jz!Q%j!Q![6}![;'S%j;'S;=`%{<%lO%jj7o[!r`$kYOy%jz!O%j!O!P4z!P!Q%j!Q![7h![!g%j!g!h5q!h#X%j#X#Y5q#Y;'S%j;'S;=`%{<%lO%jj8jS!eYOy%jz;'S%j;'S;=`%{<%lO%jj8{WxWOy%jz!O%j!O!P4c!P!Q%j!Q![7h![;'S%j;'S;=`%{<%lO%jj9jU`YOy%jz!Q%j!Q![4z![;'S%j;'S;=`%{<%lO%j~:RTxWOy%jz{:b{;'S%j;'S;=`%{<%lO%j~:iS!r`$a~Oy%jz;'S%j;'S;=`%{<%lO%jj:z[$kYOy%jz!O%j!O!P4z!P!Q%j!Q![7h![!g%j!g!h5q!h#X%j#X#Y5q#Y;'S%j;'S;=`%{<%lO%jj;uUcYOy%jz![%j![!]<X!];'S%j;'S;=`%{<%lO%jj<`SdY!r`Oy%jz;'S%j;'S;=`%{<%lO%jj<qSmYOy%jz;'S%j;'S;=`%{<%lO%jh=SU!WWOy%jz!_%j!_!`=f!`;'S%j;'S;=`%{<%lO%jh=mS!WW!r`Oy%jz;'S%j;'S;=`%{<%lO%jl>QS!WW!|SOy%jz;'S%j;'S;=`%{<%lO%jj>eV#PQ!WWOy%jz!_%j!_!`=f!`!a>z!a;'S%j;'S;=`%{<%lO%jb?RS#PQ!r`Oy%jz;'S%j;'S;=`%{<%lO%jj?bYOy%jz}%j}!O@Q!O!c%j!c!}@o!}#T%j#T#o@o#o;'S%j;'S;=`%{<%lO%jj@VW!r`Oy%jz!c%j!c!}@o!}#T%j#T#o@o#o;'S%j;'S;=`%{<%lO%jj@v[lY!r`Oy%jz}%j}!O@o!O!Q%j!Q![@o![!c%j!c!}@o!}#T%j#T#o@o#o;'S%j;'S;=`%{<%lO%jhAqS!}WOy%jz;'S%j;'S;=`%{<%lO%jjBSSoYOy%jz;'S%j;'S;=`%{<%lO%jnBeSn^Oy%jz;'S%j;'S;=`%{<%lO%jjBvU!}WOy%jz#a%j#a#bCY#b;'S%j;'S;=`%{<%lO%jbC_U!r`Oy%jz#d%j#d#eCq#e;'S%j;'S;=`%{<%lO%jbCvU!r`Oy%jz#c%j#c#dDY#d;'S%j;'S;=`%{<%lO%jbD_U!r`Oy%jz#f%j#f#gDq#g;'S%j;'S;=`%{<%lO%jbDvU!r`Oy%jz#h%j#h#iEY#i;'S%j;'S;=`%{<%lO%jbE_U!r`Oy%jz#T%j#T#UEq#U;'S%j;'S;=`%{<%lO%jbEvU!r`Oy%jz#b%j#b#cFY#c;'S%j;'S;=`%{<%lO%jbF_U!r`Oy%jz#h%j#h#iFq#i;'S%j;'S;=`%{<%lO%jbFxS$tQ!r`Oy%jz;'S%j;'S;=`%{<%lO%jjGZSrYOy%jz;'S%j;'S;=`%{<%lO%jfGlU$gUOy%jz!_%j!_!`0^!`;'S%j;'S;=`%{<%lO%jjHTSqYOy%jz;'S%j;'S;=`%{<%lO%jfHfU#SQOy%jz!_%j!_!`0^!`;'S%j;'S;=`%{<%lO%j`H{P;=`<%l%Z",
	tokenizers: [
		descendant,
		unitToken,
		identifiers,
		queryIdentifiers,
		1,
		2,
		3,
		4,
		new LocalTokenGroup("m~RRYZ[z{a~~g~aO$c~~dP!P!Qg~lO$d~~", 28, 156)
	],
	topRules: {
		"StyleSheet": [0, 6],
		"Styles": [1, 129]
	},
	dynamicPrecedences: { "97": 1 },
	specialized: [
		{
			term: 172,
			get: (value, stack) => hashColor(value) << 1,
			external: hashColor
		},
		{
			term: 150,
			get: (value) => spec_callee[value] || -1
		},
		{
			term: 151,
			get: (value) => spec_queryIdentifier[value] || -1
		},
		{
			term: 4,
			get: (value) => spec_QueryCallee[value] || -1
		},
		{
			term: 28,
			get: (value) => spec_AtKeyword[value] || -1
		},
		{
			term: 149,
			get: (value) => spec_identifier[value] || -1
		}
	],
	tokenPrec: 2433
});
//#endregion
//#region node_modules/@codemirror/lang-css/dist/index.js
var _properties = null;
function properties() {
	if (!_properties && typeof document == "object" && document.body) {
		let { style } = document.body, names = [], seen = /* @__PURE__ */ new Set();
		for (let prop in style) if (prop != "cssText" && prop != "cssFloat") {
			if (typeof style[prop] == "string") {
				if (/[A-Z]/.test(prop)) prop = prop.replace(/[A-Z]/g, (ch) => "-" + ch.toLowerCase());
				if (!seen.has(prop)) {
					names.push(prop);
					seen.add(prop);
				}
			}
		}
		_properties = names.sort().map((name) => ({
			type: "property",
			label: name,
			apply: name + ": "
		}));
	}
	return _properties || [];
}
var pseudoClasses = /*@__PURE__*/ [
	"active",
	"after",
	"any-link",
	"autofill",
	"backdrop",
	"before",
	"checked",
	"cue",
	"default",
	"defined",
	"disabled",
	"empty",
	"enabled",
	"file-selector-button",
	"first",
	"first-child",
	"first-letter",
	"first-line",
	"first-of-type",
	"focus",
	"focus-visible",
	"focus-within",
	"fullscreen",
	"has",
	"host",
	"host-context",
	"hover",
	"in-range",
	"indeterminate",
	"invalid",
	"is",
	"lang",
	"last-child",
	"last-of-type",
	"left",
	"link",
	"marker",
	"modal",
	"not",
	"nth-child",
	"nth-last-child",
	"nth-last-of-type",
	"nth-of-type",
	"only-child",
	"only-of-type",
	"optional",
	"out-of-range",
	"part",
	"placeholder",
	"placeholder-shown",
	"read-only",
	"read-write",
	"required",
	"right",
	"root",
	"scope",
	"selection",
	"slotted",
	"target",
	"target-text",
	"valid",
	"visited",
	"where"
].map((name) => ({
	type: "class",
	label: name
}));
var values = /*@__PURE__*/ [
	"above",
	"absolute",
	"activeborder",
	"additive",
	"activecaption",
	"after-white-space",
	"ahead",
	"alias",
	"all",
	"all-scroll",
	"alphabetic",
	"alternate",
	"always",
	"antialiased",
	"appworkspace",
	"asterisks",
	"attr",
	"auto",
	"auto-flow",
	"avoid",
	"avoid-column",
	"avoid-page",
	"avoid-region",
	"axis-pan",
	"background",
	"backwards",
	"baseline",
	"below",
	"bidi-override",
	"blink",
	"block",
	"block-axis",
	"bold",
	"bolder",
	"border",
	"border-box",
	"both",
	"bottom",
	"break",
	"break-all",
	"break-word",
	"bullets",
	"button",
	"button-bevel",
	"buttonface",
	"buttonhighlight",
	"buttonshadow",
	"buttontext",
	"calc",
	"capitalize",
	"caps-lock-indicator",
	"caption",
	"captiontext",
	"caret",
	"cell",
	"center",
	"checkbox",
	"circle",
	"cjk-decimal",
	"clear",
	"clip",
	"close-quote",
	"col-resize",
	"collapse",
	"color",
	"color-burn",
	"color-dodge",
	"column",
	"column-reverse",
	"compact",
	"condensed",
	"contain",
	"content",
	"contents",
	"content-box",
	"context-menu",
	"continuous",
	"copy",
	"counter",
	"counters",
	"cover",
	"crop",
	"cross",
	"crosshair",
	"currentcolor",
	"cursive",
	"cyclic",
	"darken",
	"dashed",
	"decimal",
	"decimal-leading-zero",
	"default",
	"default-button",
	"dense",
	"destination-atop",
	"destination-in",
	"destination-out",
	"destination-over",
	"difference",
	"disc",
	"discard",
	"disclosure-closed",
	"disclosure-open",
	"document",
	"dot-dash",
	"dot-dot-dash",
	"dotted",
	"double",
	"down",
	"e-resize",
	"ease",
	"ease-in",
	"ease-in-out",
	"ease-out",
	"element",
	"ellipse",
	"ellipsis",
	"embed",
	"end",
	"ethiopic-abegede-gez",
	"ethiopic-halehame-aa-er",
	"ethiopic-halehame-gez",
	"ew-resize",
	"exclusion",
	"expanded",
	"extends",
	"extra-condensed",
	"extra-expanded",
	"fantasy",
	"fast",
	"fill",
	"fill-box",
	"fixed",
	"flat",
	"flex",
	"flex-end",
	"flex-start",
	"footnotes",
	"forwards",
	"from",
	"geometricPrecision",
	"graytext",
	"grid",
	"groove",
	"hand",
	"hard-light",
	"help",
	"hidden",
	"hide",
	"higher",
	"highlight",
	"highlighttext",
	"horizontal",
	"hsl",
	"hsla",
	"hue",
	"icon",
	"ignore",
	"inactiveborder",
	"inactivecaption",
	"inactivecaptiontext",
	"infinite",
	"infobackground",
	"infotext",
	"inherit",
	"initial",
	"inline",
	"inline-axis",
	"inline-block",
	"inline-flex",
	"inline-grid",
	"inline-table",
	"inset",
	"inside",
	"intrinsic",
	"invert",
	"italic",
	"justify",
	"keep-all",
	"landscape",
	"large",
	"larger",
	"left",
	"level",
	"lighter",
	"lighten",
	"line-through",
	"linear",
	"linear-gradient",
	"lines",
	"list-item",
	"listbox",
	"listitem",
	"local",
	"logical",
	"loud",
	"lower",
	"lower-hexadecimal",
	"lower-latin",
	"lower-norwegian",
	"lowercase",
	"ltr",
	"luminosity",
	"manipulation",
	"match",
	"matrix",
	"matrix3d",
	"medium",
	"menu",
	"menutext",
	"message-box",
	"middle",
	"min-intrinsic",
	"mix",
	"monospace",
	"move",
	"multiple",
	"multiple_mask_images",
	"multiply",
	"n-resize",
	"narrower",
	"ne-resize",
	"nesw-resize",
	"no-close-quote",
	"no-drop",
	"no-open-quote",
	"no-repeat",
	"none",
	"normal",
	"not-allowed",
	"nowrap",
	"ns-resize",
	"numbers",
	"numeric",
	"nw-resize",
	"nwse-resize",
	"oblique",
	"opacity",
	"open-quote",
	"optimizeLegibility",
	"optimizeSpeed",
	"outset",
	"outside",
	"outside-shape",
	"overlay",
	"overline",
	"padding",
	"padding-box",
	"painted",
	"page",
	"paused",
	"perspective",
	"pinch-zoom",
	"plus-darker",
	"plus-lighter",
	"pointer",
	"polygon",
	"portrait",
	"pre",
	"pre-line",
	"pre-wrap",
	"preserve-3d",
	"progress",
	"push-button",
	"radial-gradient",
	"radio",
	"read-only",
	"read-write",
	"read-write-plaintext-only",
	"rectangle",
	"region",
	"relative",
	"repeat",
	"repeating-linear-gradient",
	"repeating-radial-gradient",
	"repeat-x",
	"repeat-y",
	"reset",
	"reverse",
	"rgb",
	"rgba",
	"ridge",
	"right",
	"rotate",
	"rotate3d",
	"rotateX",
	"rotateY",
	"rotateZ",
	"round",
	"row",
	"row-resize",
	"row-reverse",
	"rtl",
	"run-in",
	"running",
	"s-resize",
	"sans-serif",
	"saturation",
	"scale",
	"scale3d",
	"scaleX",
	"scaleY",
	"scaleZ",
	"screen",
	"scroll",
	"scrollbar",
	"scroll-position",
	"se-resize",
	"self-start",
	"self-end",
	"semi-condensed",
	"semi-expanded",
	"separate",
	"serif",
	"show",
	"single",
	"skew",
	"skewX",
	"skewY",
	"skip-white-space",
	"slide",
	"slider-horizontal",
	"slider-vertical",
	"sliderthumb-horizontal",
	"sliderthumb-vertical",
	"slow",
	"small",
	"small-caps",
	"small-caption",
	"smaller",
	"soft-light",
	"solid",
	"source-atop",
	"source-in",
	"source-out",
	"source-over",
	"space",
	"space-around",
	"space-between",
	"space-evenly",
	"spell-out",
	"square",
	"start",
	"static",
	"status-bar",
	"stretch",
	"stroke",
	"stroke-box",
	"sub",
	"subpixel-antialiased",
	"svg_masks",
	"super",
	"sw-resize",
	"symbolic",
	"symbols",
	"system-ui",
	"table",
	"table-caption",
	"table-cell",
	"table-column",
	"table-column-group",
	"table-footer-group",
	"table-header-group",
	"table-row",
	"table-row-group",
	"text",
	"text-bottom",
	"text-top",
	"textarea",
	"textfield",
	"thick",
	"thin",
	"threeddarkshadow",
	"threedface",
	"threedhighlight",
	"threedlightshadow",
	"threedshadow",
	"to",
	"top",
	"transform",
	"translate",
	"translate3d",
	"translateX",
	"translateY",
	"translateZ",
	"transparent",
	"ultra-condensed",
	"ultra-expanded",
	"underline",
	"unidirectional-pan",
	"unset",
	"up",
	"upper-latin",
	"uppercase",
	"url",
	"var",
	"vertical",
	"vertical-text",
	"view-box",
	"visible",
	"visibleFill",
	"visiblePainted",
	"visibleStroke",
	"visual",
	"w-resize",
	"wait",
	"wave",
	"wider",
	"window",
	"windowframe",
	"windowtext",
	"words",
	"wrap",
	"wrap-reverse",
	"x-large",
	"x-small",
	"xor",
	"xx-large",
	"xx-small"
].map((name) => ({
	type: "keyword",
	label: name
})).concat(/*@__PURE__*/ [
	"aliceblue",
	"antiquewhite",
	"aqua",
	"aquamarine",
	"azure",
	"beige",
	"bisque",
	"black",
	"blanchedalmond",
	"blue",
	"blueviolet",
	"brown",
	"burlywood",
	"cadetblue",
	"chartreuse",
	"chocolate",
	"coral",
	"cornflowerblue",
	"cornsilk",
	"crimson",
	"cyan",
	"darkblue",
	"darkcyan",
	"darkgoldenrod",
	"darkgray",
	"darkgreen",
	"darkkhaki",
	"darkmagenta",
	"darkolivegreen",
	"darkorange",
	"darkorchid",
	"darkred",
	"darksalmon",
	"darkseagreen",
	"darkslateblue",
	"darkslategray",
	"darkturquoise",
	"darkviolet",
	"deeppink",
	"deepskyblue",
	"dimgray",
	"dodgerblue",
	"firebrick",
	"floralwhite",
	"forestgreen",
	"fuchsia",
	"gainsboro",
	"ghostwhite",
	"gold",
	"goldenrod",
	"gray",
	"grey",
	"green",
	"greenyellow",
	"honeydew",
	"hotpink",
	"indianred",
	"indigo",
	"ivory",
	"khaki",
	"lavender",
	"lavenderblush",
	"lawngreen",
	"lemonchiffon",
	"lightblue",
	"lightcoral",
	"lightcyan",
	"lightgoldenrodyellow",
	"lightgray",
	"lightgreen",
	"lightpink",
	"lightsalmon",
	"lightseagreen",
	"lightskyblue",
	"lightslategray",
	"lightsteelblue",
	"lightyellow",
	"lime",
	"limegreen",
	"linen",
	"magenta",
	"maroon",
	"mediumaquamarine",
	"mediumblue",
	"mediumorchid",
	"mediumpurple",
	"mediumseagreen",
	"mediumslateblue",
	"mediumspringgreen",
	"mediumturquoise",
	"mediumvioletred",
	"midnightblue",
	"mintcream",
	"mistyrose",
	"moccasin",
	"navajowhite",
	"navy",
	"oldlace",
	"olive",
	"olivedrab",
	"orange",
	"orangered",
	"orchid",
	"palegoldenrod",
	"palegreen",
	"paleturquoise",
	"palevioletred",
	"papayawhip",
	"peachpuff",
	"peru",
	"pink",
	"plum",
	"powderblue",
	"purple",
	"rebeccapurple",
	"red",
	"rosybrown",
	"royalblue",
	"saddlebrown",
	"salmon",
	"sandybrown",
	"seagreen",
	"seashell",
	"sienna",
	"silver",
	"skyblue",
	"slateblue",
	"slategray",
	"snow",
	"springgreen",
	"steelblue",
	"tan",
	"teal",
	"thistle",
	"tomato",
	"turquoise",
	"violet",
	"wheat",
	"white",
	"whitesmoke",
	"yellow",
	"yellowgreen"
].map((name) => ({
	type: "constant",
	label: name
})));
var tags = /*@__PURE__*/ [
	"a",
	"abbr",
	"address",
	"article",
	"aside",
	"b",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"figcaption",
	"figure",
	"footer",
	"form",
	"header",
	"hgroup",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"meter",
	"nav",
	"ol",
	"output",
	"p",
	"pre",
	"ruby",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"tr",
	"u",
	"ul"
].map((name) => ({
	type: "type",
	label: name
}));
var atRules = /*@__PURE__*/ [
	"@charset",
	"@color-profile",
	"@container",
	"@counter-style",
	"@font-face",
	"@font-feature-values",
	"@font-palette-values",
	"@import",
	"@keyframes",
	"@layer",
	"@media",
	"@namespace",
	"@page",
	"@position-try",
	"@property",
	"@scope",
	"@starting-style",
	"@supports",
	"@view-transition"
].map((label) => ({
	type: "keyword",
	label
}));
var identifier = /^(\w[\w-]*|-\w[\w-]*|)$/;
var variable = /^-(-[\w-]*)?$/;
function isVarArg(node, doc) {
	var _a;
	if (node.name == "(" || node.type.isError) node = node.parent || node;
	if (node.name != "ArgList") return false;
	let callee = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.firstChild;
	if ((callee === null || callee === void 0 ? void 0 : callee.name) != "Callee") return false;
	return doc.sliceString(callee.from, callee.to) == "var";
}
var VariablesByNode = /*@__PURE__*/ new NodeWeakMap();
var declSelector = ["Declaration"];
function astTop(node) {
	for (let cur = node;;) {
		if (cur.type.isTop) return cur;
		if (!(cur = cur.parent)) return node;
	}
}
function variableNames(doc, node, isVariable) {
	if (node.to - node.from > 4096) {
		let known = VariablesByNode.get(node);
		if (known) return known;
		let result = [], seen = /* @__PURE__ */ new Set(), cursor = node.cursor(IterMode.IncludeAnonymous);
		if (cursor.firstChild()) do
			for (let option of variableNames(doc, cursor.node, isVariable)) if (!seen.has(option.label)) {
				seen.add(option.label);
				result.push(option);
			}
		while (cursor.nextSibling());
		VariablesByNode.set(node, result);
		return result;
	} else {
		let result = [], seen = /* @__PURE__ */ new Set();
		node.cursor().iterate((node) => {
			var _a;
			if (isVariable(node) && node.matchContext(declSelector) && ((_a = node.node.nextSibling) === null || _a === void 0 ? void 0 : _a.name) == ":") {
				let name = doc.sliceString(node.from, node.to);
				if (!seen.has(name)) {
					seen.add(name);
					result.push({
						label: name,
						type: "variable"
					});
				}
			}
		});
		return result;
	}
}
/**
Create a completion source for a CSS dialect, providing a
predicate for determining what kind of syntax node can act as a
completable variable. This is used by language modes like Sass and
Less to reuse this package's completion logic.
*/
var defineCSSCompletionSource = (isVariable) => (context) => {
	let { state, pos } = context, node = syntaxTree(state).resolveInner(pos, -1);
	let isDash = node.type.isError && node.from == node.to - 1 && state.doc.sliceString(node.from, node.to) == "-";
	if (node.name == "PropertyName" || (isDash || node.name == "TagName") && /^(Block|Styles)$/.test(node.resolve(node.to).name)) return {
		from: node.from,
		options: properties(),
		validFor: identifier
	};
	if (node.name == "ValueName") return {
		from: node.from,
		options: values,
		validFor: identifier
	};
	if (node.name == "PseudoClassName") return {
		from: node.from,
		options: pseudoClasses,
		validFor: identifier
	};
	if (isVariable(node) || (context.explicit || isDash) && isVarArg(node, state.doc)) return {
		from: isVariable(node) || isDash ? node.from : pos,
		options: variableNames(state.doc, astTop(node), isVariable),
		validFor: variable
	};
	if (node.name == "TagName") {
		for (let { parent } = node; parent; parent = parent.parent) if (parent.name == "Block") return {
			from: node.from,
			options: properties(),
			validFor: identifier
		};
		return {
			from: node.from,
			options: tags,
			validFor: identifier
		};
	}
	if (node.name == "AtKeyword") return {
		from: node.from,
		options: atRules,
		validFor: identifier
	};
	if (!context.explicit) return null;
	let above = node.resolve(pos), before = above.childBefore(pos);
	if (before && before.name == ":" && above.name == "PseudoClassSelector") return {
		from: pos,
		options: pseudoClasses,
		validFor: identifier
	};
	if (before && before.name == ":" && above.name == "Declaration" || above.name == "ArgList") return {
		from: pos,
		options: values,
		validFor: identifier
	};
	if (above.name == "Block" || above.name == "Styles") return {
		from: pos,
		options: properties(),
		validFor: identifier
	};
	return null;
};
/**
CSS property, variable, and value keyword completion source.
*/
var cssCompletionSource = /*@__PURE__*/ defineCSSCompletionSource((n) => n.name == "VariableName");
/**
A language provider based on the [Lezer CSS
parser](https://github.com/lezer-parser/css), extended with
highlighting and indentation information.
*/
var cssLanguage = /*@__PURE__*/ LRLanguage.define({
	name: "css",
	parser: /*@__PURE__*/ parser.configure({ props: [/*@__PURE__*/ indentNodeProp.add({ Declaration: /*@__PURE__*/ continuedIndent() }), /*@__PURE__*/ foldNodeProp.add({ "Block KeyframeList": foldInside })] }),
	languageData: {
		commentTokens: { block: {
			open: "/*",
			close: "*/"
		} },
		indentOnInput: /^\s*\}$/,
		wordChars: "-"
	}
});
/**
Language support for CSS.
*/
function css() {
	return new LanguageSupport(cssLanguage, cssLanguage.data.of({ autocomplete: cssCompletionSource }));
}
//#endregion
export { LRParser as a, ExternalTokenizer as i, cssLanguage as n, LocalTokenGroup as o, ContextTracker as r, css as t };
