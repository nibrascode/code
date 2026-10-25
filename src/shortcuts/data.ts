/** Default shortcut sets. Keys use "+" inside a combo and a space between chord steps. "Shift Shift" = double Shift. */
export type App = "vscode" | "android" | "chrome" | "windows" | "macos";
export type Shortcut = { id: string; app: App; cat: string; desc: string; win?: string; mac?: string };
export const APPS: { id: App; name: string }[] = [
  { id: "vscode", name: "VS Code" }, { id: "android", name: "Android Studio" }, { id: "chrome", name: "Chrome" }, { id: "windows", name: "Windows" }, { id: "macos", name: "macOS" },
];
type Row = [cat: string, desc: string, win: string | null, mac?: string | null];
const auto = (w: string) => w.replace(/\bCtrl\b/g, "Cmd").replace(/\bAlt\b/g, "Option");
function make(app: App, rows: Row[]): Shortcut[] {
  return rows.map(([cat, desc, win, mac], i) => ({ id: `${app}-${i}`, app, cat, desc, ...(win ? { win } : {}), ...(mac === null ? {} : { mac: mac ?? (win ? auto(win) : undefined) }) }));
}

export const SHORTCUTS: Shortcut[] = [
  ...make("vscode", [
    ["General", "Show Command Palette", "Ctrl+Shift+P"], ["General", "Quick Open, go to file", "Ctrl+P"], ["General", "Open Settings", "Ctrl+,"], ["General", "Open Keyboard Shortcuts", "Ctrl+K Ctrl+S"],
    ["Display", "Toggle Sidebar", "Ctrl+B"], ["Display", "Toggle integrated terminal", "Ctrl+`", "Ctrl+`"], ["Display", "Create new terminal", "Ctrl+Shift+`", "Ctrl+Shift+`"], ["Display", "Show Explorer", "Ctrl+Shift+E"],
    ["Display", "Show Search", "Ctrl+Shift+F"], ["Display", "Show Source Control", "Ctrl+Shift+G", "Ctrl+Shift+G"], ["Display", "Show Extensions", "Ctrl+Shift+X"], ["Display", "Show Problems panel", "Ctrl+Shift+M"],
    ["Display", "Zen Mode", "Ctrl+K Z"], ["Display", "Zoom in", "Ctrl+="], ["Display", "Zoom out", "Ctrl+-"], ["Display", "Split editor", "Ctrl+\\"],
    ["Search and Replace", "Find", "Ctrl+F"], ["Search and Replace", "Replace", "Ctrl+H", "Cmd+Option+F"], ["Search and Replace", "Find next", "F3", "Cmd+G"], ["Search and Replace", "Find previous", "Shift+F3", "Cmd+Shift+G"],
    ["Search and Replace", "Select all occurrences of find match", "Alt+Enter"], ["Search and Replace", "Replace in files", "Ctrl+Shift+H"],
    ["Multi-cursor", "Add selection to next find match", "Ctrl+D"], ["Multi-cursor", "Select all occurrences of current word", "Ctrl+Shift+L"], ["Multi-cursor", "Insert cursor above", "Ctrl+Alt+Up", "Cmd+Option+Up"], ["Multi-cursor", "Insert cursor below", "Ctrl+Alt+Down", "Cmd+Option+Down"],
    ["Multi-cursor", "Select current line", "Ctrl+L"], ["Multi-cursor", "Expand selection", "Shift+Alt+Right", "Ctrl+Shift+Cmd+Right"],
    ["Basic Editing", "Copy line down", "Shift+Alt+Down"], ["Basic Editing", "Copy line up", "Shift+Alt+Up"], ["Basic Editing", "Move line up", "Alt+Up"], ["Basic Editing", "Move line down", "Alt+Down"],
    ["Basic Editing", "Delete line", "Ctrl+Shift+K"], ["Basic Editing", "Insert line below", "Ctrl+Enter"], ["Basic Editing", "Insert line above", "Ctrl+Shift+Enter"], ["Basic Editing", "Toggle line comment", "Ctrl+/"],
    ["Basic Editing", "Toggle block comment", "Shift+Alt+A"], ["Basic Editing", "Indent line", "Ctrl+]"], ["Basic Editing", "Outdent line", "Ctrl+["], ["Basic Editing", "Fold region", "Ctrl+Shift+[", "Cmd+Option+["], ["Basic Editing", "Unfold region", "Ctrl+Shift+]", "Cmd+Option+]"],
    ["Rich Languages Editing", "Trigger suggestion", "Ctrl+Space", "Ctrl+Space"], ["Rich Languages Editing", "Format document", "Shift+Alt+F"], ["Rich Languages Editing", "Quick Fix", "Ctrl+."], ["Rich Languages Editing", "Rename symbol", "F2", "F2"],
    ["Navigation", "Go to line", "Ctrl+G", "Ctrl+G"], ["Navigation", "Go to symbol in file", "Ctrl+Shift+O"], ["Navigation", "Go to definition", "F12", "F12"], ["Navigation", "Peek definition", "Alt+F12"], ["Navigation", "Go back", "Alt+Left", "Ctrl+-"],
    ["File Management", "Save", "Ctrl+S"], ["File Management", "Save all", "Ctrl+K S", "Cmd+Option+S"], ["File Management", "Close editor", "Ctrl+W"], ["File Management", "Reopen closed editor", "Ctrl+Shift+T"], ["File Management", "New file", "Ctrl+N"],
    ["Debug", "Start / continue debugging", "F5", "F5"], ["Debug", "Stop debugging", "Shift+F5", "Shift+F5"], ["Debug", "Toggle breakpoint", "F9", "F9"], ["Debug", "Step over", "F10", "F10"], ["Debug", "Step into", "F11", "F11"], ["Debug", "Step out", "Shift+F11", "Shift+F11"],
  ]),
  ...make("android", [
    ["General", "Search Everywhere", "Shift Shift", "Shift Shift"], ["General", "Find Action", "Ctrl+Shift+A", "Cmd+Shift+A"], ["General", "Open Settings", "Ctrl+Alt+S", "Cmd+,"], ["General", "Project tool window", "Alt+1", "Cmd+1"],
    ["General", "Logcat tool window", "Alt+6", "Cmd+6"], ["General", "Terminal", "Alt+F12", "Option+F12"],
    ["Navigation", "Go to class", "Ctrl+N", "Cmd+O"], ["Navigation", "Go to file", "Ctrl+Shift+N", "Cmd+Shift+O"], ["Navigation", "Recent files", "Ctrl+E", "Cmd+E"], ["Navigation", "Go to line", "Ctrl+G", "Cmd+L"],
    ["Navigation", "Go to declaration", "Ctrl+B", "Cmd+B"], ["Navigation", "Find usages", "Alt+F7", "Option+F7"], ["Navigation", "Navigate back", "Ctrl+Alt+Left", "Cmd+["],
    ["Editing", "Code completion", "Ctrl+Space", "Ctrl+Space"], ["Editing", "Show intention actions / quick fix", "Alt+Enter", "Option+Enter"], ["Editing", "Generate code", "Alt+Insert", "Cmd+N"], ["Editing", "Override methods", "Ctrl+O", "Ctrl+O"],
    ["Editing", "Parameter info", "Ctrl+P", "Cmd+P"], ["Editing", "Quick documentation", "Ctrl+Q", "F1"], ["Editing", "Duplicate line", "Ctrl+D", "Cmd+D"], ["Editing", "Delete line", "Ctrl+Y", "Cmd+Backspace"],
    ["Editing", "Comment line", "Ctrl+/", "Cmd+/"], ["Editing", "Block comment", "Ctrl+Shift+/", "Cmd+Option+/"], ["Editing", "Extend selection", "Ctrl+W", "Option+Up"], ["Editing", "Move line up", "Alt+Shift+Up", "Option+Shift+Up"],
    ["Editing", "Surround with", "Ctrl+Alt+T", "Cmd+Option+T"], ["Editing", "Reformat code", "Ctrl+Alt+L", "Cmd+Option+L"], ["Editing", "Optimize imports", "Ctrl+Alt+O", "Ctrl+Option+O"],
    ["Search", "Find", "Ctrl+F", "Cmd+F"], ["Search", "Replace", "Ctrl+R", "Cmd+R"], ["Search", "Find in path", "Ctrl+Shift+F", "Cmd+Shift+F"],
    ["Refactoring", "Rename", "Shift+F6", "Shift+F6"], ["Refactoring", "Refactor this", "Ctrl+Alt+Shift+T", "Ctrl+T"], ["Refactoring", "Extract method", "Ctrl+Alt+M", "Cmd+Option+M"], ["Refactoring", "Extract variable", "Ctrl+Alt+V", "Cmd+Option+V"],
    ["Build and Run", "Make project", "Ctrl+F9", "Cmd+F9"], ["Build and Run", "Run", "Shift+F10", "Ctrl+R"], ["Build and Run", "Debug", "Shift+F9", "Ctrl+D"], ["Build and Run", "Apply Changes and Restart Activity", "Ctrl+F10", "Ctrl+Cmd+R"],
    ["Debug", "Toggle breakpoint", "Ctrl+F8", "Cmd+F8"], ["Debug", "Step over", "F8", "F8"], ["Debug", "Step into", "F7", "F7"], ["Debug", "Resume program", "F9", "Cmd+Option+R"],
    ["File Management", "Close editor tab", "Ctrl+F4", "Cmd+W"],
  ]),
  ...make("chrome", [
    ["Tabs and Windows", "New tab", "Ctrl+T"], ["Tabs and Windows", "Close tab", "Ctrl+W"], ["Tabs and Windows", "Reopen closed tab", "Ctrl+Shift+T"], ["Tabs and Windows", "New window", "Ctrl+N"],
    ["Tabs and Windows", "New Incognito window", "Ctrl+Shift+N"], ["Tabs and Windows", "Next tab", "Ctrl+Tab", "Cmd+Option+Right"], ["Tabs and Windows", "Previous tab", "Ctrl+Shift+Tab", "Cmd+Option+Left"], ["Tabs and Windows", "Go to first tab", "Ctrl+1"],
    ["Tabs and Windows", "Go to last tab", "Ctrl+9"], ["Tabs and Windows", "Close window", "Ctrl+Shift+W"], ["Tabs and Windows", "Full screen", "F11", "Ctrl+Cmd+F"], ["Tabs and Windows", "Chrome Task Manager", "Shift+Esc", null],
    ["Navigation", "Focus address bar", "Ctrl+L"], ["Navigation", "Back", "Alt+Left", "Cmd+["], ["Navigation", "Forward", "Alt+Right", "Cmd+]"], ["Navigation", "Reload", "Ctrl+R"], ["Navigation", "Hard reload (ignore cache)", "Ctrl+Shift+R"],
    ["Navigation", "Open home page", "Alt+Home", "Cmd+Shift+H"],
    ["Page", "Find on page", "Ctrl+F"], ["Page", "Print", "Ctrl+P"], ["Page", "Save page", "Ctrl+S"], ["Page", "Open file", "Ctrl+O"], ["Page", "Zoom in", "Ctrl+="], ["Page", "Zoom out", "Ctrl+-"], ["Page", "Reset zoom", "Ctrl+0"],
    ["Page", "Bookmark this page", "Ctrl+D"], ["Page", "Show / hide bookmarks bar", "Ctrl+Shift+B"],
    ["Tools", "History", "Ctrl+H", "Cmd+Y"], ["Tools", "Downloads", "Ctrl+J", "Cmd+Shift+J"], ["Tools", "Clear browsing data", "Ctrl+Shift+Delete", "Cmd+Shift+Backspace"],
    ["Developer", "Open DevTools", "Ctrl+Shift+I", "Cmd+Option+I"], ["Developer", "Open DevTools Console", "Ctrl+Shift+J", "Cmd+Option+J"], ["Developer", "View page source", "Ctrl+U", "Cmd+Option+U"], ["Developer", "Inspect element mode", "Ctrl+Shift+C", "Cmd+Shift+C"],
  ]),
  ...make("windows", [
    ["Desktop", "Show desktop", "Win+D", null], ["Desktop", "Minimize all windows", "Win+M", null], ["Desktop", "Task View", "Win+Tab", null], ["Desktop", "Switch between open apps", "Alt+Tab", null],
    ["Desktop", "Snap window left", "Win+Left", null], ["Desktop", "Snap window right", "Win+Right", null], ["Desktop", "Maximize window", "Win+Up", null], ["Desktop", "Minimize / restore window", "Win+Down", null],
    ["Desktop", "Close active window", "Alt+F4", null], ["Virtual desktops", "New virtual desktop", "Win+Ctrl+D", null], ["Virtual desktops", "Next virtual desktop", "Win+Ctrl+Right", null], ["Virtual desktops", "Previous virtual desktop", "Win+Ctrl+Left", null], ["Virtual desktops", "Close virtual desktop", "Win+Ctrl+F4", null],
    ["System", "Lock the PC", "Win+L", null], ["System", "Open Settings", "Win+I", null], ["System", "Run dialog", "Win+R", null], ["System", "Search", "Win+S", null], ["System", "Quick Link menu", "Win+X", null],
    ["System", "Task Manager", "Ctrl+Shift+Esc", null], ["System", "Project / display mode", "Win+P", null], ["System", "Notifications", "Win+N", null], ["System", "Quick Settings", "Win+A", null],
    ["Tools", "Clipboard history", "Win+V", null], ["Tools", "Screen snip", "Win+Shift+S", null], ["Tools", "Screenshot to file", "Win+PrtScn", null], ["Tools", "Emoji panel", "Win+.", null], ["Tools", "Game Bar", "Win+G", null],
    ["File Explorer", "Open File Explorer", "Win+E", null], ["File Explorer", "Rename item", "F2", null], ["File Explorer", "New folder", "Ctrl+Shift+N", null], ["File Explorer", "Properties", "Alt+Enter", null],
  ]),
  ...make("macos", [
    ["System", "Spotlight search", null, "Cmd+Space"], ["System", "Switch apps", null, "Cmd+Tab"], ["System", "Switch windows of the same app", null, "Cmd+`"], ["System", "Force Quit", null, "Cmd+Option+Esc"],
    ["System", "Lock screen", null, "Ctrl+Cmd+Q"], ["System", "Emoji & Symbols", null, "Ctrl+Cmd+Space"], ["System", "App settings", null, "Cmd+,"],
    ["Windows", "Quit app", null, "Cmd+Q"], ["Windows", "Close window", null, "Cmd+W"], ["Windows", "Hide app", null, "Cmd+H"], ["Windows", "Hide other apps", null, "Cmd+Option+H"], ["Windows", "Minimize window", null, "Cmd+M"], ["Windows", "Full screen", null, "Ctrl+Cmd+F"],
    ["Mission Control", "Mission Control", null, "Ctrl+Up"], ["Mission Control", "App windows (App Exposé)", null, "Ctrl+Down"], ["Mission Control", "Space to the left", null, "Ctrl+Left"], ["Mission Control", "Space to the right", null, "Ctrl+Right"], ["Mission Control", "Show / hide Dock", null, "Cmd+Option+D"],
    ["Screenshots", "Screenshot of whole screen", null, "Cmd+Shift+3"], ["Screenshots", "Screenshot of area", null, "Cmd+Shift+4"], ["Screenshots", "Screenshot app / recording", null, "Cmd+Shift+5"],
    ["Finder", "New folder", null, "Cmd+Shift+N"], ["Finder", "Move to Trash", null, "Cmd+Backspace"], ["Finder", "Empty Trash", null, "Cmd+Shift+Backspace"], ["Finder", "Get Info", null, "Cmd+I"], ["Finder", "Quick Look", null, "Space"],
    ["Finder", "Show hidden files", null, "Cmd+Shift+."], ["Finder", "Go to folder", null, "Cmd+Shift+G"], ["Finder", "Move copied item here", null, "Cmd+Option+V"],
    ["Editing", "Undo", null, "Cmd+Z"], ["Editing", "Redo", null, "Cmd+Shift+Z"],
  ]),
];

/** Combos browsers or operating systems usually keep for themselves; practice them with the on-screen keyboard. */
export const RESERVED = new Set(["Ctrl+W", "Ctrl+T", "Ctrl+N", "Ctrl+Shift+N", "Ctrl+Shift+T", "Ctrl+Shift+W", "Ctrl+Tab", "Ctrl+Shift+Tab", "Alt+F4", "Alt+Tab", "Ctrl+Shift+Esc", "Win+L", "Win+D", "Win+Tab", "Win+R", "Win+E", "Win+S", "Win+I", "Win+X", "Win+V", "Win+G", "Win+Shift+S", "Cmd+Q", "Cmd+W", "Cmd+T", "Cmd+N", "Cmd+Tab", "Cmd+Space", "Cmd+H", "Cmd+M", "Ctrl+Cmd+Q", "Cmd+Option+Esc", "Cmd+Shift+3", "Cmd+Shift+4", "Cmd+Shift+5", "Ctrl+Up", "Ctrl+Down", "Ctrl+Left", "Ctrl+Right", "Ctrl+Cmd+F", "F11", "Cmd+`"]);
