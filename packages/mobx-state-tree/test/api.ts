import * as mst from "../src"
import { readFileSync } from "fs"
const METHODS = [
    "addDisposer",
    "addMiddleware",
    "applyAction",
    "applyPatch",
    "applySnapshot",
    "createActionTrackingMiddleware",
    "clone",
    "decorate",
    "destroy",
    "detach",
    "escapeJsonPath",
    "flow",
    "getChildType",
    "getEnv",
    "getParent",
    "getPath",
    "getPathParts",
    "getRelativePath",
    "getRoot",
    "getIdentifier",
    "getSnapshot",
    "getType",
    "hasParent",
    "isAlive",
    "isProtected",
    "isRoot",
    "isStateTreeNode",
    "onAction",
    "onPatch",
    "onSnapshot",
    "process",
    "protect",
    "recordActions",
    "recordPatches",
    "resolveIdentifier",
    "resolvePath",
    "tryResolve",
    "typecheck",
    "types",
    "unescapeJsonPath",
    "unprotect",
    "walk",
    "getMembers"
]
const TYPES = [
    "Date",
    "array",
    "boolean",
    "compose",
    "custom",
    "frozen",
    "identifier",
    "late",
    "literal",
    "map",
    "maybe",
    "model",
    "null",
    "number",
    "optional",
    "reference",
    "refinement",
    "string",
    "undefined",
    "union",
    "enumeration"
]

test("correct api exposed", () => {
    console.dir(mst["IActionRecorder"])
    expect(
        Object.keys(mst)
            .sort()
            .filter(key => mst[key] !== undefined) // filter out interfaces
    ).toEqual(METHODS.sort())
})
test("correct types exposed", () => {
    expect(Object.keys(mst.types).sort()).toEqual(TYPES.sort())
})
test("all methods mentioned in readme.md", () => {
    const readme = readFileSync(__dirname + "/../../../README.md", "utf8")
    const missing = TYPES.map(type => "types." + type)
        .concat(METHODS)
        .filter(identifier => readme.indexOf("`" + identifier) === -1)
    expect(missing).toEqual([])
})
test("all methods mentioned in api.md", () => {
    const apimd = readFileSync(__dirname + "/../../../API.md", "utf8")
    const missing = TYPES.map(type => "types." + type)
        .concat(METHODS)
        .filter(identifier => apimd.indexOf("# " + identifier) === -1)
    expect(missing).toEqual([])
})
