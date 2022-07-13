const TypeConstants = Object.freeze({
    string: "string",
    number: "number", 
    bigint: "bigint",
    symbol: "symbol",
    object: "object",
    boolean: "boolean",
    function: "function",
    undefined: "undefined",
});

export const typeOf = (val) => (
    typeof val
);

export const isArray = (val) => (
    Array.isArray(val)
);

export const isNan = (val) => (
    Number.isNaN(val)
);

/**
 * @param {*} val unknown
 * @returns true if typeof val is equal to "object"
 */
export const isObjectLoose = (val) => (
    typeOf(val) === TypeConstants.object
);

export const isUndefined = (val) => (
    typeOf(val) === TypeConstants.undefined
);

export const isNull = (val) => (
    val === null
);

export const isNullOrUndefined = (val) => (
    !val
    && (
        isUndefined(val)
        || isNull(val)
    )
);

export const isBoolean = (val) => (
    typeOf(val) === TypeConstants.boolean
);

export const isFunction = (val) => (
    typeOf(val) === TypeConstants.function
);

export const isSymbol = (val) => (
    typeOf(val) === TypeConstants.symbol
);

export const isObject = (val) => (
    isObjectLoose(val)
    && !isNull(val)
    && !isArray(val)
);

export const isString = (val) => (
    typeOf(val) === TypeConstants.string
);

export const isNumber = (val) => (
    typeOf(val) === TypeConstants.number
    && !isNan(val)
);

export const isBigInt = (val) => (
    typeOf(val) === TypeConstants.bigint
);