function rot(value: number, shift: number) {
  return (value << shift) | (value >>> (32 - shift));
}

function add(a: number, b: number) {
  return (a + b) >>> 0;
}

export function md5(text: string) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const bitLength = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  const lo = bitLength >>> 0;
  const hi = Math.floor(bitLength / 0x100000000);
  for (let i = 0; i < 4; i += 1) bytes.push((lo >>> (8 * i)) & 0xff);
  for (let i = 0; i < 4; i += 1) bytes.push((hi >>> (8 * i)) & 0xff);

  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;
  const shift = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  const table = Array.from({ length: 64 }, (_, index) => Math.floor(Math.abs(Math.sin(index + 1)) * 0x100000000) >>> 0);

  for (let offset = 0; offset < bytes.length; offset += 64) {
    const word = Array.from({ length: 16 }, (_, index) => {
      const at = offset + index * 4;
      return (bytes[at] | (bytes[at + 1] << 8) | (bytes[at + 2] << 16) | (bytes[at + 3] << 24)) >>> 0;
    });
    let a = a0;
    let b = b0;
    let c = c0;
    let d = d0;
    for (let i = 0; i < 64; i += 1) {
      let f = 0;
      let g = 0;
      if (i < 16) {
        f = (b & c) | (~b & d);
        g = i;
      } else if (i < 32) {
        f = (d & b) | (~d & c);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = (3 * i + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * i) % 16;
      }
      f = add(add(add(f, a), table[i]), word[g]);
      a = d;
      d = c;
      c = b;
      b = add(b, rot(f, shift[(i >> 4) * 4 + (i % 4)]));
    }
    a0 = add(a0, a);
    b0 = add(b0, b);
    c0 = add(c0, c);
    d0 = add(d0, d);
  }

  return [a0, b0, c0, d0]
    .map((value) =>
      [0, 8, 16, 24]
        .map((shiftBy) => ((value >>> shiftBy) & 0xff).toString(16).padStart(2, "0"))
        .join(""),
    )
    .join("");
}
