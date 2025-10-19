// here is the list of all available filters applicable to a variable
export const filterNames = [
  "deg2rad",
  "rad2deg",
  "number_format",
  "sin",
  "asin",
  "asinh",
  "cos",
  "acos",
  "acosh",
  "tan",
  "atan",
  "atanh",
  "floor",
  "ceil",
  "round",
  "first",
  "last",
  "count",
  "range",
  "reverse",
  "unique",
  "safe_array",
  "flatten",
  "filter_empty",
  "sort",
  // "fsort", --- DEPRECATED ---
  "shuffle",
  // "array_shuffle", --- DEPRECATED ---
  "diff",
  // "array_diff", --- DEPRECATED ---
  "diff_assoc",
  // "array_diff_assoc", --- DEPRECATED ---
  "intersect",
  // "array_intersect", --- DEPRECATED ---
  "intersect_assoc",
  // "array_intersect_assoc", --- DEPRECATED ---
  "merge",
  // "array_merge", --- DEPRECATED ---
  "merge_recursive",
  // "array_merge_recursive", --- DEPRECATED ---
  "index_by",
  "push",
  // "array_push", --- DEPRECATED ---
  "pop",
  // "array_pop", --- DEPRECATED ---
  "unshift",
  // "array_unshift", --- DEPRECATED ---
  "shift",
  // "array_shift", --- DEPRECATED ---
  "remove",
  // "array_remove", --- DEPRECATED ---
  "append",
  "prepend",
  "abs",
  "sqrt",
  "exp",
  "log",
  "log10",
  "ln",
  "pow",
  "array_min",
  "min",
  "array_max",
  "max",
  // "num_min", --- DEPRECATED ---
  // "num_max", --- DEPRECATED ---
  "sum",
  "avg",
  "product",
  "equals",
  // "eq", --- DEPRECATED ---
  "not_equals",
  // "ne", --- DEPRECATED ---
  "greater_than",
  // "gt", --- DEPRECATED ---
  "greater_than_or_equal",
  // "gte", --- DEPRECATED ---
  "less_than",
  // "lt", --- DEPRECATED ---
  "less_than_or_equal",
  // "lte", --- DEPRECATED ---
  "odd",
  "even",
  "in",
  "add",
  "subtract",
  // "sub", --- DEPRECATED, but potentially coming back ---
  "multiply",
  // "mul", --- DEPRECATED, but potentially coming back ---
  "modulus",
  // "mod", --- DEPRECATED, but potentially coming back ---
  "divide",
  // "div", --- DEPRECATED, but potentially coming back ---
  "bitwise_and",
  "bitwise_or",
  "bitwise_xor",
  "not",
  "bitwise_not",
  "is_null",
  // "null", --- DEPRECATED ---
  "is_empty",
  // "empty", --- DEPRECATED ---
  "is_object",
  "is_array",
  "is_int",
  "is_decimal",
  "is_bool",
  "is_text",
  "addslashes",
  "escape",
  "list_encodings",
  "detect_encoding",
  "to_utf8",
  "from_utf8",
  "convert_encoding",
  "to_lower",
  // "lower", --- DEPRECATED ---
  "to_upper",
  // "upper", --- DEPRECATED ---
  "trim",
  "ltrim",
  "rtrim",
  "capitalize",
  "substr",
  "split",
  "join",
  "slice",
  // "array_slice", --- DEPRECATED ---
  "strlen",
  "strip_html",
  // "strip_tags", --- DEPRECATED ---
  "unaccent",
  // "strip_accents", --- DEPRECATED ---
  "index",
  // "strpos", --- DEPRECATED ---
  "iindex",
  // "stripos", --- DEPRECATED ---
  "starts_with",
  "istarts_with",
  "ends_with",
  "iends_with",
  "contains",
  "icontains",
  "set",
  "set_conditional",
  "set_ifnotempty",
  "set_ifnotnull",
  "first_notnull",
  "first_notempty",
  "unset",
  "transform",
  "get",
  "has",
  "fill",
  // "array_fill", --- DEPRECATED ---
  "fill_keys",
  // "array_fill_keys", --- DEPRECATED ---
  "keys",
  // "array_keys", --- DEPRECATED ---
  "values",
  // "array_values", --- DEPRECATED ---
  "entries",
  // "array_entries", --- DEPRECATED ---
  "to_expr",
  "to_text",
  "to_int",
  "to_decimal",
  "to_bool",
  "to_timestamp",
  // "to_epochms", --- DEPRECATED ---
  "to_ms",
  // "to_epoch_ms", --- DEPRECATED ---
  "to_seconds",
  // "to_epoch_sec", --- DEPRECATED ---
  "to_minutes",
  // "to_epoch_minute", --- DEPRECATED ---
  "to_hours",
  // "to_epoch_hour", --- DEPRECATED ---
  "to_days",
  // "to_epoch_day", --- DEPRECATED ---
  "create_object",
  "create_object_from_entries",
  "json_decode",
  "json_encode",
  "xml_decode",
  "csv_parse",
  "csv_decode",
  "csv_encode",
  "csv_create",
  "url_decode",
  "url_decode_rfc3986",
  "url_encode",
  "url_encode_rfc3986",
  "url_addarg",
  "url_delarg",
  "url_hasarg",
  "url_getarg",
  "url_parse",
  "querystring_parse",
  "yaml_decode",
  "yaml_encode",
  "hex2bin",
  "bin2hex",
  "dechex",
  "hexdec",
  "decbin",
  "bindec",
  "decoct",
  "octdec",
  "base_convert",
  "base64_decode",
  "base64_encode",
  "base64_decode_urlsafe",
  "base64_encode_urlsafe",
  "encrypt",
  "decrypt",
  "jws_encode",
  // "crypto_jws_encode", --- DEPRECATED ---
  "jws_decode",
  // "crypto_jws_decode", --- DEPRECATED ---
  "jwe_encode",
  // "crypto_jwe_encode", --- DEPRECATED ---
  "jwe_decode",
  // "crypto_jwe_decode", --- DEPRECATED ---
  "concat",
  "sprintf",
  "replace",
  // "string_replace", --- DEPRECATED ---
  "secureid_encode",
  "secureid_decode",
  "md5",
  "sha1",
  "sha256",
  "sha384",
  "sha512",
  "hmac_md5",
  "hmac_sha1",
  "hmac_sha256",
  "hmac_sha384",
  "hmac_sha512",
  "create_uid",
  // "uid", --- DEPRECATED ---
  "uuid",
  // "uuid4", --- DEPRECATED ---
  "parse_timestamp",
  // "epochms_from_format", --- DEPRECATED ---
  "format_timestamp",
  // "epochms_date", --- DEPRECATED ---
  "transform_timestamp",
  // "epochms_transform", --- DEPRECATED ---
  "add_secs_to_timestamp",
  // "epochms_add_secs", --- DEPRECATED ---
  "add_ms_to_timestamp",
  // "epochms_add_ms", --- DEPRECATED ---
  "regex_matches",
  // "regex_test", --- DEPRECATED ---
  "regex_get_first_match",
  // "regex_match", --- DEPRECATED ---
  "regex_get_all_matches",
  // "regex_match_all", --- DEPRECATED ---
  "regex_quote",
  "regex_replace",
  "map",
  "filter",
  "filter_null",
  "filter_empty_text",
  "filter_empty_object",
  "filter_empty_array",
  "some",
  "every",
  "find",
  "findIndex",
  "reduce",
  "pick",
  "unpick",
];

// List of input filters allowed for each input type
// Used in parser/generic/inputClause.js and in xano-ide
export const inputFilterNames = {
  text: [
    "trim",
    "min",
    "max",
    "startsWith",
    "prevent",
    "lower",
    "upper",
    "alphaOk",
    "digitOk",
    "ok",
    "pattern",
  ],
  decimal: ["min", "max"],
  int: ["min", "max"],
  email: ["trim", "lower"],
  password: [
    "min",
    "max",
    "minAlpha",
    "minLowerAlpha",
    "minUpperAlpha",
    "minDigit",
    "minSymbol",
  ],
  // The following types do not have filters:
  blob: [],
  blob_img: [],
  blob_video: [],
  blob_audio: [],
  enum: [],
  file: [],
  json: [],
  obj: [],
  epochms: [],
};

export const querySearchFilterNames = [
  "covers",
  "l1_distance_manhattan",
  "l2_distance_euclidean",
  "inner_product",
  "negative_inner_product",
  "cosine_distance",
  "cosine_similarity",
  "distance",
  "within",
  "between",
  "length",
  "floor",
  "ceil",
  "round",
  "to_lower",
  "to_upper",
  "concat",
  "substr",
  "coalesce",
  "unaccent",
  "add",
  "sub",
  "mul",
  "div",
  "search_rank",
  "timestamp_month",
  "timestamp_year",
  "timestamp_week",
  "timestamp_hour",
  "timestamp_minute",
  "timestamp_day_of_month",
  "timestamp_day_of_week",
  "timestamp_day_of_year",
  "timestamp_epoch_day",
  "timestamp_epoch_hour",
  "timestamp_epoch_minute",
  "timestamp_epoch_sec",
  "timestamp_add_seconds",
  "timestamp_subtract_seconds",
  "timestamp_add_minutes",
  "timestamp_subtract_minutes",
  "timestamp_add_hours",
  "timestamp_subtract_hours",
  "timestamp_add_days",
  "timestamp_subtract_days",
  "timestamp_add_months",
  "timestamp_subtract_months",
  "timestamp_add_years",
  "timestamp_subtract_years",
];
