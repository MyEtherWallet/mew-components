(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{2032:function(module,exports){module.exports=function(hljs){var INT_SUFFIX="(_*[ui](8|16|32|64|128))?",CRYSTAL_METHOD_RE="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",CRYSTAL_KEYWORDS={keyword:"abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",literal:"false nil true"},SUBST={className:"subst",begin:"#{",end:"}",keywords:CRYSTAL_KEYWORDS},EXPANSION={className:"template-variable",variants:[{begin:"\\{\\{",end:"\\}\\}"},{begin:"\\{%",end:"%\\}"}],keywords:CRYSTAL_KEYWORDS};function recursiveParen(begin,end){var contains=[{begin:begin,end:end}];return contains[0].contains=contains,contains}var STRING={className:"string",contains:[hljs.BACKSLASH_ESCAPE,SUBST],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:"%[Qwi]?\\(",end:"\\)",contains:recursiveParen("\\(","\\)")},{begin:"%[Qwi]?\\[",end:"\\]",contains:recursiveParen("\\[","\\]")},{begin:"%[Qwi]?{",end:"}",contains:recursiveParen("{","}")},{begin:"%[Qwi]?<",end:">",contains:recursiveParen("<",">")},{begin:"%[Qwi]?\\|",end:"\\|"},{begin:/<<-\w+$/,end:/^\s*\w+$/}],relevance:0},Q_STRING={className:"string",variants:[{begin:"%q\\(",end:"\\)",contains:recursiveParen("\\(","\\)")},{begin:"%q\\[",end:"\\]",contains:recursiveParen("\\[","\\]")},{begin:"%q{",end:"}",contains:recursiveParen("{","}")},{begin:"%q<",end:">",contains:recursiveParen("<",">")},{begin:"%q\\|",end:"\\|"},{begin:/<<-'\w+'$/,end:/^\s*\w+$/}],relevance:0},REGEXP={begin:"(?!%})("+hljs.RE_STARTERS_RE+"|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",keywords:"case if select unless until when while",contains:[{className:"regexp",contains:[hljs.BACKSLASH_ESCAPE,SUBST],variants:[{begin:"//[a-z]*",relevance:0},{begin:"/(?!\\/)",end:"/[a-z]*"}]}],relevance:0},CRYSTAL_DEFAULT_CONTAINS=[EXPANSION,STRING,Q_STRING,{className:"regexp",contains:[hljs.BACKSLASH_ESCAPE,SUBST],variants:[{begin:"%r\\(",end:"\\)",contains:recursiveParen("\\(","\\)")},{begin:"%r\\[",end:"\\]",contains:recursiveParen("\\[","\\]")},{begin:"%r{",end:"}",contains:recursiveParen("{","}")},{begin:"%r<",end:">",contains:recursiveParen("<",">")},{begin:"%r\\|",end:"\\|"}],relevance:0},REGEXP,{className:"meta",begin:"@\\[",end:"\\]",contains:[hljs.inherit(hljs.QUOTE_STRING_MODE,{className:"meta-string"})]},hljs.HASH_COMMENT_MODE,{className:"class",beginKeywords:"class module struct",end:"$|;",illegal:/=/,contains:[hljs.HASH_COMMENT_MODE,hljs.inherit(hljs.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{begin:"<"}]},{className:"class",beginKeywords:"lib enum union",end:"$|;",illegal:/=/,contains:[hljs.HASH_COMMENT_MODE,hljs.inherit(hljs.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"})],relevance:10},{beginKeywords:"annotation",end:"$|;",illegal:/=/,contains:[hljs.HASH_COMMENT_MODE,hljs.inherit(hljs.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"})],relevance:10},{className:"function",beginKeywords:"def",end:/\B\b/,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:CRYSTAL_METHOD_RE,endsParent:!0})]},{className:"function",beginKeywords:"fun macro",end:/\B\b/,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:CRYSTAL_METHOD_RE,endsParent:!0})],relevance:5},{className:"symbol",begin:hljs.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{className:"symbol",begin:":",contains:[STRING,{begin:CRYSTAL_METHOD_RE}],relevance:0},{className:"number",variants:[{begin:"\\b0b([01_]+)"+INT_SUFFIX},{begin:"\\b0o([0-7_]+)"+INT_SUFFIX},{begin:"\\b0x([A-Fa-f0-9_]+)"+INT_SUFFIX},{begin:"\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_*[-+]?[0-9_]*)?(_*f(32|64))?(?!_)"},{begin:"\\b([1-9][0-9_]*|0)"+INT_SUFFIX}],relevance:0}];return SUBST.contains=CRYSTAL_DEFAULT_CONTAINS,EXPANSION.contains=CRYSTAL_DEFAULT_CONTAINS.slice(1),{aliases:["cr"],lexemes:"[a-zA-Z_]\\w*[!?=]?",keywords:CRYSTAL_KEYWORDS,contains:CRYSTAL_DEFAULT_CONTAINS}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_crystal.5fe336541a19b8ada28f.bundle.js.map