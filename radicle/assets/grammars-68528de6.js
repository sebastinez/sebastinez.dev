const e={extensions:[".sol"],names:["solidity"],patterns:[{begin:'\\b(assembly)(?:\\s*\\((\\".*?\\")\\))?\\s*\\{',beginCaptures:{1:{name:"keyword"},2:{name:"string.quoted"}},end:"\\}",name:"scope",patterns:[{include:"#assembly"}]},{captures:{1:{name:"support.type"}},match:"\\b(?<!\\.)(addmod|mulmod|keccak256|sha256|sha3|ripemd160|ecrecover)\\s*\\("},{include:"#everything"}],repository:{assembly:{patterns:[{captures:{1:{name:"keyword"}},match:"\\b(?<!\\.)(stop|add|sub|mul|div|sdiv|mod|smod|exp|not|lt|gt|slt|sgt|eq|iszero|and|or|xor|byte|shl|shr|sar|addmod|mulmod|signextend|keccak256|pc|pop|mload|mstore|mstore8|sload|sstore|msize|gas|address|balance|selfbalance|caller|callvalue|calldataload|calldatasize|calldatacopy|codesize|codecopy|extcodesize|extcodecopy|returndatasize|returndatacopy|extcodehash|create|create2|call|callcode|delegatecall|staticcall|return|revert|selfdestruct|invalid|log0|log1|log2|log3|log4|chainid|basefee|origin|gasprice|blockhash|coinbase|timestamp|number|difficulty|gaslimit)\\s*\\("},{match:"\\b(let|switch|case|default)\\b",name:"keyword"},{begin:"\\{",end:"\\}",name:"scope",patterns:[{include:"#assembly"}]},{include:"#everything"}]},comments:{patterns:[{match:"\\/\\/.*",name:"comment"},{begin:"(\\/\\*)",end:"(\\*\\/)",name:"comment"}]},everything:{patterns:[{include:"#comments"},{captures:{2:{name:"entity.name.function"}},match:"\\b(event|enum)\\s+([A-Za-z_]\\w*)\\b",name:"keyword"},{begin:"\\b(contract|interface|library)\\s+([A-Za-z_]\\w*)(?:\\s+(is)\\s+)?",beginCaptures:{1:{name:"keyword"},2:{name:"entity.name.function"},3:{name:"keyword"}},end:"\\{",name:"scope",patterns:[{match:"[A-Za-z_]\\w*",name:"entity.name.function"},{include:"#numbers"}]},{captures:{2:{name:"entity.name.function"}},match:"\\b(constructor|error|using|struct|type|modifier|fallback)(\\s+[A-Za-z_]\\w*)?\\b",name:"keyword"},{captures:{2:{name:"entity.name.function"}},match:"\\b(function)(\\s+[A-Za-z_]\\w*)?\\b",name:"keyword"},{captures:{1:{name:"markup.italic"}},match:"\\.(length|selector)\\b"},{match:"\\bthis\\b",name:"markup.italic"},{match:"\\bsuper\\b",name:"markup.italic"},{captures:{1:{name:"support.type"},2:{name:"support.type"}},match:"\\b(msg|block|tx|bytes|string)\\.([A-Za-z_]\\w*)\\b"},{captures:{1:{name:"keyword"},2:{name:"variable.parameter"}},match:"\\b(?:(indexed|memory|storage|calldata|payable|immutable)\\s*(\\b[A-Za-z_]\\w*)?\\s*)(?=[,\\)\\n])"},{match:"\\b(true|false)\\b",name:"constant.language"},{captures:{1:{name:"constant.language"}},match:"\\b(payable)\\s*\\("},{captures:{1:{name:"keyword"}},match:`\\b(from)\\s*(?=[\\'\\"])`},{captures:{1:{name:"keyword"}},match:"\\b(?:[A-Za-z_]\\w*)\\s+(as)\\s+(?:[A-Za-z_]\\w*)"},{captures:{1:{name:"keyword"}},match:"\\b(global);"},{match:"\\b(var|import|solidity|constant|pragma\\s*(?:experimental|abicoder)?|mapping|payable|storage|memory|calldata|if|else|for|while|do|break|continue|returns?|try|catch|private|public|pure|view|internal|immutable|external|virtual|override|abstract|suicide|emit|is|throw|revert|assert|require|receive|delete)\\b",name:"keyword"},{include:"#numbers"},{match:"\\b(0[xX][a-fA-F0-9]+)\\b",name:"constant.numeric"},{match:"(=|:=|!|>|<|\\||&|\\?|\\^|~|\\*|\\+|\\-|\\/|\\%)",name:"keyword.operator"},{match:"(\\bhex\\b|\\bunicode\\b)",name:"markup.italic"},{match:"\\s\\:\\s",name:"keyword.operator"},{match:"\\bnow\\b",name:"support.type"},{match:"\\b_;",name:"keyword"},{match:"\\b(abi)\\.([A-Za-z_]\\w*)\\b",name:"support.type"},{captures:{1:{name:"support.type"}},match:"\\b(blockhash|gasleft)\\s*\\("},{captures:{1:{name:"support.type"}},match:"\\.(call|delegatecall|staticcall)\\s*[\\(\\{]"},{captures:{1:{name:"keyword"},2:{name:"entity.name.function"}},match:"(?:\\.|(new\\s+))([A-Za-z_]\\w*)\\{"},{captures:{1:{name:"constant.language"},2:{name:"scope"},3:{name:"constant.numeric"},4:{name:"constant.numeric"},5:{name:"keyword"},6:{name:"variable.parameter"}},match:"\\b(?:(address(?:\\s+payable)?|I?ERC[\\dA-Za-z_]\\w*|string|bytes?\\d*|int\\d*|uint\\d*|bool|u?fixed\\d+x\\d+)|([A-Za-z_]\\w*))\\s*(?:\\[(\\d*)\\])?\\s*(?:\\[(\\d*)\\])?\\s*(?:(indexed|memory|storage|calldata|payable|immutable)?\\s*(\\b[A-Za-z_]\\w*)?\\s*)?(?=[,\\)\\n])"},{captures:{1:{name:"constant.language"},2:{name:"constant.numeric"},3:{name:"constant.numeric"},4:{name:"constant.numeric"},5:{name:"keyword"},6:{name:"keyword"}},match:"\\b(address(?:\\s*payable)?|I?ERC[\\dA-Za-z_]\\w*|string|bytes?\\d*|int\\d*|uint\\d*|bool|u?fixed\\d+x\\d+)\\b(?:(?:\\s*\\[(\\d*)\\])?(?:\\s*\\[(\\d*)\\])?(?:\\s*\\[(\\d*)\\])?\\s*((?:private\\s|public\\s|internal\\s|external\\s|constant\\s|immutable\\s|memory\\s|storage\\s)*)\\s*(?:[A-Za-z_]\\w*)\\s*(\\=))?"},{captures:{1:{name:"entity.name.function"},2:{name:"constant.numeric"},3:{name:"constant.numeric"}},match:"\\b([A-Za-z_]\\w*)(?:\\s*\\[(\\d*)\\]\\s*)?(?:\\s*\\[(\\d*)\\]\\s*)?\\("},{captures:{1:{name:"support.type"}},match:"\\b(wei|gwei|ether|seconds|minutes|hours|days|weeks)\\b"},{match:"\\bnew\\b",name:"keyword"},{match:"\\banonymous\\b",name:"keyword"},{match:"\\bunchecked\\b",name:"keyword"},{match:'([\\"].*?[\\"])',name:"string.quoted"},{match:"([\\'].*?[\\'])",name:"string.quoted"}]},numbers:{patterns:[{match:"\\b(?:[+-]?\\.?\\d[\\d_eE]*)(?:\\.\\d+[\\deE]*)?\\b",name:"constant.numeric"}]}},scopeName:"source.solidity"},c=e,n={extensions:[".bf",".cake",".cs",".csx",".eq",".linq",".uno"],names:["beef","c#","cake","cakescript","csharp","eq","uno"],patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#directives"},{include:"#declarations"},{include:"#script-top-level"}],repository:{"anonymous-method-expression":{patterns:[{begin:`(?x)
(?:\\b(async)\\b\\s*)?
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(=>)`,beginCaptures:{1:{name:"storage.modifier.cs"},2:{name:"entity.name.variable.parameter.cs"},3:{name:"keyword.operator.arrow.cs"}},end:"(?=\\)|;|}|,)",patterns:[{include:"#block"},{include:"#ref-modifier"},{include:"#expression"}]},{begin:`(?x)
(?:\\b(async)\\b\\s*)?
(\\(.*?\\))\\s*
(=>)`,beginCaptures:{1:{name:"storage.modifier.cs"},2:{patterns:[{include:"#lambda-parameter-list"}]},3:{name:"keyword.operator.arrow.cs"}},end:"(?=\\)|;|}|,)",patterns:[{include:"#block"},{include:"#ref-modifier"},{include:"#expression"}]},{begin:`(?x)
(?:\\b(async)\\b\\s*)?
(?:\\b(delegate)\\b\\s*)`,beginCaptures:{1:{name:"storage.modifier.cs"},2:{name:"keyword.other.delegate.cs"}},end:"(?=\\)|;|}|,)",patterns:[{include:"#parenthesized-parameter-list"},{include:"#block"},{include:"#expression"}]}]},"anonymous-object-creation-expression":{begin:"\\b(new)\\b\\s*(?=\\{|$)",beginCaptures:{1:{name:"keyword.other.new.cs"}},end:"(?<=\\})",patterns:[{include:"#initializer-expression"}]},argument:{patterns:[{match:"\\b(ref|out|in)\\b",name:"storage.modifier.cs"},{include:"#declaration-expression-local"},{include:"#expression"}]},"argument-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#named-argument"},{include:"#argument"},{include:"#punctuation-comma"}]},"array-creation-expression":{begin:`(?x)
\\b(new|stackalloc)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?\\s*
(?=\\[)`,beginCaptures:{1:{name:"keyword.other.new.cs"},2:{patterns:[{include:"#type"}]}},end:"(?<=\\])",patterns:[{include:"#bracketed-argument-list"}]},"as-expression":{captures:{1:{name:"keyword.other.as.cs"},2:{patterns:[{include:"#type"}]}},match:`(?x)
(?<!\\.)\\b(as)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?`},attribute:{patterns:[{include:"#type-name"},{include:"#attribute-arguments"}]},"attribute-arguments":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.parenthesis.open.cs"}},end:"(\\))",endCaptures:{1:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#attribute-named-argument"},{include:"#expression"},{include:"#punctuation-comma"}]},"attribute-named-argument":{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?==)",beginCaptures:{1:{name:"entity.name.variable.property.cs"}},end:"(?=(,|\\)))",patterns:[{include:"#operator-assignment"},{include:"#expression"}]},"attribute-section":{begin:"(\\[)(assembly|module|field|event|method|param|property|return|type)?(\\:)?",beginCaptures:{1:{name:"punctuation.squarebracket.open.cs"},2:{name:"keyword.other.attribute-specifier.cs"},3:{name:"punctuation.separator.colon.cs"}},end:"(\\])",endCaptures:{1:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute"},{include:"#punctuation-comma"}]},"await-expression":{match:"(?!\\.)\\b(await)\\b",name:"keyword.other.await.cs"},"await-statement":{begin:"(?<!\\.)\\b(await)\\b",beginCaptures:{1:{name:"keyword.other.await.cs"}},end:"(?=;)",patterns:[{include:"#statement"}]},"base-types":{begin:":",beginCaptures:{0:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|where)",patterns:[{include:"#type"},{include:"#punctuation-comma"},{include:"#preprocessor"}]},block:{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#statement"}]},"boolean-literal":{patterns:[{match:"(?<!\\.)\\btrue\\b",name:"constant.language.boolean.true.cs"},{match:"(?<!\\.)\\bfalse\\b",name:"constant.language.boolean.false.cs"}]},"bracketed-argument-list":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.cs"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#named-argument"},{include:"#argument"},{include:"#punctuation-comma"}]},"bracketed-parameter-list":{begin:"(?=(\\[))",beginCaptures:{1:{name:"punctuation.squarebracket.open.cs"}},end:"(?=(\\]))",endCaptures:{1:{name:"punctuation.squarebracket.close.cs"}},patterns:[{begin:"(?<=\\[)",end:"(?=\\])",patterns:[{include:"#comment"},{include:"#attribute-section"},{include:"#parameter"},{include:"#punctuation-comma"},{include:"#variable-initializer"}]}]},"break-or-continue-statement":{captures:{1:{name:"keyword.control.flow.break.cs"},2:{name:"keyword.control.flow.continue.cs"}},match:"(?<!\\.)\\b(?:(break)|(continue))\\b"},"cast-expression":{captures:{1:{name:"punctuation.parenthesis.open.cs"},2:{patterns:[{include:"#type"}]},7:{name:"punctuation.parenthesis.close.cs"}},match:`(?x)
(\\()\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(\\))(?=\\s*-*!*@?[_[:alnum:]\\(])`},"catch-clause":{begin:"(?<!\\.)\\b(catch)\\b",beginCaptures:{1:{name:"keyword.control.try.catch.cs"}},end:"(?<=\\})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{captures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.local.cs"}},match:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?:(\\g<identifier>)\\b)?`}]},{include:"#when-clause"},{include:"#comment"},{include:"#block"}]},"char-character-escape":{match:`\\\\(['"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|u[0-9a-fA-F]{4})`,name:"constant.character.escape.cs"},"char-literal":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.char.begin.cs"}},end:"(\\')|((?:[^\\\\\\n])$)",endCaptures:{1:{name:"punctuation.definition.char.end.cs"},2:{name:"invalid.illegal.newline.cs"}},name:"string.quoted.single.cs",patterns:[{include:"#char-character-escape"}]},"checked-unchecked-expression":{begin:"(?<!\\.)\\b(?:(checked)|(unchecked))\\b\\s*(\\()",beginCaptures:{1:{name:"keyword.other.checked.cs"},2:{name:"keyword.other.unchecked.cs"},3:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},"checked-unchecked-statement":{begin:"(?<!\\.)\\b(?:(checked)|(unchecked))\\b\\s*(?!\\()",beginCaptures:{1:{name:"keyword.other.checked.cs"},2:{name:"keyword.other.unchecked.cs"}},end:"(?<=\\})",patterns:[{include:"#block"},{include:"#comment"}]},"class-declaration":{begin:"(?=\\bclass\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
\\b(class)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)\\s*`,beginCaptures:{1:{name:"keyword.other.class.cs"},2:{name:"entity.name.type.class.cs"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"class-or-struct-members":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#storage-modifier"},{include:"#type-declarations"},{include:"#property-declaration"},{include:"#field-declaration"},{include:"#event-declaration"},{include:"#indexer-declaration"},{include:"#variable-initializer"},{include:"#constructor-declaration"},{include:"#destructor-declaration"},{include:"#operator-declaration"},{include:"#conversion-operator-declaration"},{include:"#method-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},comment:{patterns:[{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.cs"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.cs"}},name:"comment.block.cs"},{begin:"(^\\s+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.cs"}},end:"(?=$)",patterns:[{begin:"(?<!/)///(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.cs"}},end:"(?=$)",name:"comment.block.documentation.cs",patterns:[{include:"#xml-doc-comment"}]},{begin:"(?<!/)//(?:(?!/)|(?=//))",beginCaptures:{0:{name:"punctuation.definition.comment.cs"}},end:"(?=$)",name:"comment.line.double-slash.cs"}]}]},"conditional-operator":{begin:"\\?(?!\\s*[?.\\[]|\\s*$)",beginCaptures:{0:{name:"keyword.operator.conditional.question-mark.cs"}},end:":",endCaptures:{0:{name:"keyword.operator.conditional.colon.cs"}},patterns:[{include:"#expression"}]},"constructor-declaration":{begin:"(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()",end:"(?<=\\})|(?=;)",patterns:[{captures:{1:{name:"entity.name.function.cs"}},match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b"},{begin:"(:)",beginCaptures:{1:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|=>)",patterns:[{include:"#constructor-initializer"}]},{include:"#parenthesized-parameter-list"},{include:"#preprocessor"},{include:"#comment"},{include:"#expression-body"},{include:"#block"}]},"constructor-initializer":{begin:"\\b(?:(base)|(this))\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.other.base.cs"},2:{name:"keyword.other.this.cs"}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"conversion-operator-declaration":{begin:`(?x)
(?<explicit_or_implicit_keyword>(?:\\b(?:explicit|implicit)))\\s*
(?<operator_keyword>(?:\\b(?:operator)))\\s*
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{captures:{1:{name:"keyword.other.explicit.cs"}},match:"\\b(explicit)\\b"},{captures:{1:{name:"keyword.other.implicit.cs"}},match:"\\b(implicit)\\b"}]},2:{name:"keyword.other.operator-decl.cs"},3:{patterns:[{include:"#type"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},"declaration-expression-local":{captures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"}},match:`(?x) # e.g. int x OR var x
(?:
  \\b(var)\\b|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\b\\s*
(?=[,)\\]])`},"declaration-expression-tuple":{captures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.tuple-element.cs"}},match:`(?x) # e.g. int x OR var x
(?:
  \\b(var)\\b|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
                (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
    )
  )
)\\s+
(\\g<identifier>)\\b\\s*
(?=[,)])`},declarations:{patterns:[{include:"#namespace-declaration"},{include:"#type-declarations"},{include:"#punctuation-semicolon"}]},"delegate-declaration":{begin:`(?x)
(?:\\b(delegate)\\b)\\s+
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s*
(<([^<>]+)>)?\\s*
(?=\\()`,beginCaptures:{1:{name:"keyword.other.delegate.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.type.delegate.cs"},8:{patterns:[{include:"#type-parameter-list"}]}},end:"(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#generic-constraints"}]},"destructor-declaration":{begin:"(~)(@?[_[:alpha:]][_[:alnum:]]*)\\s*(?=\\()",beginCaptures:{1:{name:"punctuation.tilde.cs"},2:{name:"entity.name.function.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},directives:{patterns:[{include:"#extern-alias-directive"},{include:"#using-directive"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},"do-statement":{begin:"(?<!\\.)\\b(do)\\b",beginCaptures:{1:{name:"keyword.control.loop.do.cs"}},end:"(?=;|})",patterns:[{include:"#statement"}]},"double-raw-interpolation":{begin:"(?<=[^\\{][^\\{]|^)((?:\\{)*)(\\{\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},name:"meta.interpolation.cs",patterns:[{include:"#expression"}]},"element-access-expression":{begin:`(?x)
(?:(\\?)\\s*)?                        # preceding null-conditional operator?
(?:(\\.)\\s*)?                        # preceding dot?
(?:(@?[_[:alpha:]][_[:alnum:]]*)\\s*)? # property name
(?:(\\?)\\s*)?                        # null-conditional operator?
(?=\\[)                              # open bracket of argument list`,beginCaptures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"variable.other.object.property.cs"},4:{name:"keyword.operator.null-conditional.cs"}},end:"(?<=\\])(?!\\s*\\[)",patterns:[{include:"#bracketed-argument-list"}]},"else-part":{begin:"(?<!\\.)\\b(else)\\b",beginCaptures:{1:{name:"keyword.control.conditional.else.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#statement"}]},"enum-declaration":{begin:"(?=\\benum\\b)",end:"(?<=\\})",patterns:[{begin:"(?=enum)",end:"(?=\\{)",patterns:[{include:"#comment"},{captures:{1:{name:"keyword.other.enum.cs"},2:{name:"entity.name.type.enum.cs"}},match:"(enum)\\s+(@?[_[:alpha:]][_[:alnum:]]*)"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{)",patterns:[{include:"#type"}]}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#attribute-section"},{include:"#punctuation-comma"},{begin:"@?[_[:alpha:]][_[:alnum:]]*",beginCaptures:{0:{name:"entity.name.variable.enum-member.cs"}},end:"(?=(,|\\}))",patterns:[{include:"#comment"},{include:"#variable-initializer"}]}]},{include:"#preprocessor"},{include:"#comment"}]},"event-accessors":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{match:"\\b(add)\\b",name:"keyword.other.add.cs"},{match:"\\b(remove)\\b",name:"keyword.other.remove.cs"},{include:"#comment"},{include:"#attribute-section"},{include:"#expression-body"},{include:"#block"},{include:"#punctuation-semicolon"}]},"event-declaration":{begin:`(?x)
\\b(event)\\b\\s*
(?<return_type>
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<event_names>\\g<identifier>(?:\\s*,\\s*\\g<identifier>)*)\\s*
(?=\\{|;|$)`,beginCaptures:{1:{name:"keyword.other.event.cs"},2:{patterns:[{include:"#type"}]},8:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},9:{patterns:[{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.variable.event.cs"},{include:"#punctuation-comma"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#event-accessors"},{include:"#punctuation-comma"}]},expression:{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#checked-unchecked-expression"},{include:"#typeof-or-default-expression"},{include:"#nameof-expression"},{include:"#throw-expression"},{include:"#raw-interpolated-string"},{include:"#interpolated-string"},{include:"#verbatim-interpolated-string"},{include:"#this-or-base-expression"},{include:"#switch-expression"},{include:"#conditional-operator"},{include:"#expression-operators"},{include:"#await-expression"},{include:"#query-expression"},{include:"#as-expression"},{include:"#is-expression"},{include:"#anonymous-method-expression"},{include:"#object-creation-expression"},{include:"#array-creation-expression"},{include:"#anonymous-object-creation-expression"},{include:"#invocation-expression"},{include:"#member-access-expression"},{include:"#element-access-expression"},{include:"#cast-expression"},{include:"#literal"},{include:"#parenthesized-expression"},{include:"#tuple-deconstruction-assignment"},{include:"#initializer-expression"},{include:"#identifier"}]},"expression-body":{begin:"=>",beginCaptures:{0:{name:"keyword.operator.arrow.cs"}},end:"(?=[,\\);}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"expression-operators":{patterns:[{match:"\\*=|/=|%=|\\+=|-=|\\?\\?=",name:"keyword.operator.assignment.compound.cs"},{match:"\\&=|\\^=|<<=|>>=|\\|=",name:"keyword.operator.assignment.compound.bitwise.cs"},{match:"<<|>>",name:"keyword.operator.bitwise.shift.cs"},{match:"==|!=",name:"keyword.operator.comparison.cs"},{match:"<=|>=|<|>",name:"keyword.operator.relational.cs"},{match:"\\!|&&|\\|\\|",name:"keyword.operator.logical.cs"},{match:"\\&|~|\\^|\\|",name:"keyword.operator.bitwise.cs"},{match:"\\=",name:"keyword.operator.assignment.cs"},{match:"--",name:"keyword.operator.decrement.cs"},{match:"\\+\\+",name:"keyword.operator.increment.cs"},{match:"%|\\*|/|-|\\+",name:"keyword.operator.arithmetic.cs"},{match:"\\?\\?",name:"keyword.operator.null-coalescing.cs"}]},"extern-alias-directive":{begin:"\\s*(extern)\\b\\s*(alias)\\b\\s*(@?[_[:alpha:]][_[:alnum:]]*)",beginCaptures:{1:{name:"keyword.other.extern.cs"},2:{name:"keyword.other.alias.cs"},3:{name:"variable.other.alias.cs"}},end:"(?=;)"},"field-declaration":{begin:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s* # first field name
(?!=>|==)(?=,|;|=|$)`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.field.cs"}},end:"(?=;)",patterns:[{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.variable.field.cs"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"},{include:"#class-or-struct-members"}]},"finally-clause":{begin:"(?<!\\.)\\b(finally)\\b",beginCaptures:{1:{name:"keyword.control.try.finally.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"for-statement":{begin:"(?<!\\.)\\b(for)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.for.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#local-variable-declaration"},{include:"#expression"},{include:"#punctuation-comma"},{include:"#punctuation-semicolon"}]},{include:"#statement"}]},"foreach-statement":{begin:"(?<!\\.)\\b(foreach)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.foreach.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{captures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"},8:{name:"keyword.control.loop.in.cs"}},match:`(?x)
(?:
  (\\bvar\\b)|
  (?<type_name>
    (?:
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\s+
\\b(in)\\b`},{captures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#tuple-declaration-deconstruction-element-list"}]},3:{name:"keyword.control.loop.in.cs"}},match:`(?x) # match foreach (var (x, y) in ...)
(?:\\b(var)\\b\\s*)?
(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s+
\\b(in)\\b`},{include:"#expression"}]},{include:"#statement"}]},"generic-constraints":{begin:"(where)\\s+(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",beginCaptures:{1:{name:"keyword.other.where.cs"},2:{name:"entity.name.type.type-parameter.cs"},3:{name:"punctuation.separator.colon.cs"}},end:"(?=\\{|where|;|=>)",patterns:[{match:"\\bclass\\b",name:"keyword.other.class.cs"},{match:"\\bstruct\\b",name:"keyword.other.struct.cs"},{captures:{1:{name:"keyword.other.new.cs"},2:{name:"punctuation.parenthesis.open.cs"},3:{name:"punctuation.parenthesis.close.cs"}},match:"(new)\\s*(\\()\\s*(\\))"},{include:"#type"},{include:"#punctuation-comma"},{include:"#generic-constraints"}]},"goto-statement":{begin:"(?<!\\.)\\b(goto)\\b",beginCaptures:{1:{name:"keyword.control.goto.cs"}},end:"(?=;)",patterns:[{begin:"\\b(case)\\b",beginCaptures:{1:{name:"keyword.control.case.cs"}},end:"(?=;)",patterns:[{include:"#expression"}]},{captures:{1:{name:"keyword.control.default.cs"}},match:"\\b(default)\\b"},{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.label.cs"}]},"group-by":{captures:{1:{name:"keyword.query.by.cs"}},match:"\\b(by)\\b\\s*"},"group-clause":{begin:"\\b(group)\\b\\s*",beginCaptures:{1:{name:"keyword.query.group.cs"}},end:"(?=;|\\))",patterns:[{include:"#group-by"},{include:"#group-into"},{include:"#query-body"},{include:"#expression"}]},"group-into":{captures:{1:{name:"keyword.query.into.cs"},2:{name:"entity.name.variable.range-variable.cs"}},match:`(?x)
\\b(into)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*`},identifier:{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"variable.other.readwrite.cs"},"if-statement":{begin:"(?<!\\.)\\b(if)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.conditional.if.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"indexer-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<indexer_name>this)\\s*
(?=\\[)`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"keyword.other.this.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#bracketed-parameter-list"},{include:"#property-accessors"},{include:"#expression-body"},{include:"#variable-initializer"}]},"initializer-expression":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"interface-declaration":{begin:"(?=\\binterface\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
(interface)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"keyword.other.interface.cs"},2:{name:"entity.name.type.interface.cs"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#interface-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"interface-members":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#property-declaration"},{include:"#event-declaration"},{include:"#indexer-declaration"},{include:"#method-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},"interpolated-string":{begin:'\\$"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'(")|((?:[^\\\\\\n])$)',endCaptures:{1:{name:"punctuation.definition.string.end.cs"},2:{name:"invalid.illegal.newline.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#string-character-escape"},{include:"#interpolation"}]},interpolation:{begin:"(?<=[^\\{]|^)((?:\\{\\{)*)(\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},name:"meta.interpolation.cs",patterns:[{include:"#expression"}]},"invocation-expression":{begin:`(?x)
(?:(\\?)\\s*)?                                     # preceding null-conditional operator?
(?:(\\.)\\s*)?                                     # preceding dot?
(@?[_[:alpha:]][_[:alnum:]]*)\\s*                   # method name
(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments
(?=\\()                                           # open paren of argument list`,beginCaptures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"entity.name.function.cs"},4:{patterns:[{include:"#type-arguments"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"is-expression":{captures:{1:{name:"keyword.other.is.cs"},2:{patterns:[{include:"#type"}]}},match:`(?x)
(?<!\\.)\\b(is)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?`},"join-clause":{begin:`(?x)
\\b(join)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?
\\s+(\\g<identifier>)\\b\\s*
\\b(in)\\b\\s*`,beginCaptures:{1:{name:"keyword.query.join.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.range-variable.cs"},8:{name:"keyword.query.in.cs"}},end:"(?=;|\\))",patterns:[{include:"#join-on"},{include:"#join-equals"},{include:"#join-into"},{include:"#query-body"},{include:"#expression"}]},"join-equals":{captures:{1:{name:"keyword.query.equals.cs"}},match:"\\b(equals)\\b\\s*"},"join-into":{captures:{1:{name:"keyword.query.into.cs"},2:{name:"entity.name.variable.range-variable.cs"}},match:`(?x)
\\b(into)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*`},"join-on":{captures:{1:{name:"keyword.query.on.cs"}},match:"\\b(on)\\b\\s*"},"labeled-statement":{captures:{1:{name:"entity.name.label.cs"},2:{name:"punctuation.separator.colon.cs"}},match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)"},"lambda-parameter":{captures:{1:{name:"storage.modifier.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.parameter.cs"}},match:`(?x)
(?:\\b(ref|out|in)\\b)?\\s*
(?:(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+)?
(\\g<identifier>)\\b\\s*
(?=[,)])`},"lambda-parameter-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute-section"},{include:"#lambda-parameter"},{include:"#punctuation-comma"}]},"let-clause":{begin:`(?x)
\\b(let)\\b\\s*
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(=)\\s*`,beginCaptures:{1:{name:"keyword.query.let.cs"},2:{name:"entity.name.variable.range-variable.cs"},3:{name:"keyword.operator.assignment.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},literal:{patterns:[{include:"#boolean-literal"},{include:"#null-literal"},{include:"#numeric-literal"},{include:"#char-literal"},{include:"#raw-string-literal"},{include:"#string-literal"},{include:"#verbatim-string-literal"},{include:"#tuple-literal"}]},"local-constant-declaration":{begin:`(?x)
(?<const_keyword>\\b(?:const)\\b)\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\s*
(?=,|;|=)`,beginCaptures:{1:{name:"storage.modifier.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.local.cs"}},end:"(?=;)",patterns:[{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.variable.local.cs"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"local-declaration":{patterns:[{include:"#local-constant-declaration"},{include:"#local-variable-declaration"},{include:"#local-function-declaration"},{include:"#local-tuple-var-deconstruction"}]},"local-function-declaration":{patterns:[{include:"#method-declaration"}]},"local-tuple-var-deconstruction":{begin:`(?x) # e.g. var (x, y) = GetPoint();
(?:\\b(var)\\b\\s*)
(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*
(?=;|=|\\))`,beginCaptures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#tuple-declaration-deconstruction-element-list"}]}},end:"(?=;|\\))",patterns:[{include:"#comment"},{include:"#variable-initializer"}]},"local-variable-declaration":{begin:`(?x)
(?:
  (?:(\\busing)\\s+)?
  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref local
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )
)\\s+
(\\g<identifier>)\\s*
(?!=>)
(?=,|;|=|\\))`,beginCaptures:{1:{name:"keyword.other.using.cs"},10:{name:"entity.name.variable.local.cs"},2:{name:"storage.modifier.cs"},3:{name:"storage.modifier.cs"},4:{name:"keyword.other.var.cs"},5:{patterns:[{include:"#type"}]}},end:"(?=;|\\))",patterns:[{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.variable.local.cs"},{include:"#punctuation-comma"},{include:"#comment"},{include:"#variable-initializer"}]},"lock-statement":{begin:"(?<!\\.)\\b(lock)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.other.lock.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"member-access-expression":{patterns:[{captures:{1:{name:"keyword.operator.null-conditional.cs"},2:{name:"punctuation.accessor.cs"},3:{name:"variable.other.object.property.cs"}},match:`(?x)
(?:(\\?)\\s*)?                   # preceding null-conditional operator?
(\\.)\\s*                        # preceding dot
(@?[_[:alpha:]][_[:alnum:]]*)\\s* # property name
(?![_[:alnum:]]|\\(|(\\?)?\\[|<)  # next character is not alpha-numeric, nor a (, [, or <. Also, test for ?[`},{captures:{1:{name:"punctuation.accessor.cs"},2:{name:"variable.other.object.cs"},3:{patterns:[{include:"#type-arguments"}]}},match:`(?x)
(\\.)?\\s*
(@?[_[:alpha:]][_[:alnum:]]*)
(?<type_params>\\s*<([^<>]|\\g<type_params>)+>\\s*)
(?=
  (\\s*\\?)?
  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*
)`},{captures:{1:{name:"variable.other.object.cs"}},match:`(?x)
(@?[_[:alpha:]][_[:alnum:]]*)
(?=
  (\\s*\\?)?
  \\s*\\.\\s*@?[_[:alpha:]][_[:alnum:]]*
)`}]},"method-declaration":{begin:`(?x)
(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(\\g<identifier>)\\s*
(<([^<>]+)>)?\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"entity.name.function.cs"},9:{patterns:[{include:"#type-parameter-list"}]}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#generic-constraints"},{include:"#expression-body"},{include:"#block"}]},"named-argument":{begin:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(:)",beginCaptures:{1:{name:"entity.name.variable.parameter.cs"},2:{name:"punctuation.separator.colon.cs"}},end:"(?=(,|\\)|\\]))",patterns:[{include:"#argument"}]},"nameof-expression":{begin:"(?<!\\.)\\b(nameof)\\b\\s*(\\()",beginCaptures:{1:{name:"keyword.other.nameof.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},"namespace-declaration":{begin:"\\b(namespace)\\s+",beginCaptures:{1:{name:"keyword.other.namespace.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.namespace.cs"},{include:"#punctuation-accessor"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#declarations"},{include:"#using-directive"},{include:"#punctuation-semicolon"}]}]},"null-literal":{match:"(?<!\\.)\\bnull\\b",name:"constant.language.null.cs"},"numeric-literal":{captures:{0:{patterns:[{begin:"(?=.)",end:"$",patterns:[{captures:{10:{name:"keyword.operator.arithmetic.cs"},11:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},12:{name:"constant.numeric.other.suffix.cs"},2:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.separator.decimals.cs"},5:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},6:{name:"constant.numeric.other.separator.thousands.cs"},8:{name:"constant.numeric.other.exponent.cs"},9:{name:"keyword.operator.arithmetic.cs"}},match:"(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?([fFdDmM](?!\\w))?$"},{captures:{1:{name:"constant.numeric.other.preffix.binary.cs"},2:{name:"constant.numeric.binary.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.suffix.cs"}},match:"(\\G0[bB])([01_](?:[01_]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$"},{captures:{1:{name:"constant.numeric.other.preffix.hex.cs"},2:{name:"constant.numeric.hex.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},4:{name:"constant.numeric.other.suffix.cs"}},match:"(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$"},{captures:{2:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},3:{name:"constant.numeric.other.separator.thousands.cs"},5:{name:"constant.numeric.other.exponent.cs"},6:{name:"keyword.operator.arithmetic.cs"},7:{name:"keyword.operator.arithmetic.cs"},8:{name:"constant.numeric.decimal.cs",patterns:[{match:"(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",name:"constant.numeric.other.separator.thousands.cs"}]},9:{name:"constant.numeric.other.suffix.cs"}},match:"(\\G(?=[0-9.])(?!0[xXbB]))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?((?:(?:(?:(?:(?:[uU]|[uU]l)|[uU]L)|l[uU]?)|L[uU]?)|[fFdDmM])(?!\\w))?$"},{match:"(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])+",name:"invalid.illegal.constant.numeric.cs"}]}]}},match:"(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|_)|(?<=[eE])[+-])*"},"object-creation-expression":{patterns:[{include:"#object-creation-expression-with-parameters"},{include:"#object-creation-expression-with-no-parameters"}]},"object-creation-expression-with-no-parameters":{captures:{1:{name:"keyword.other.new.cs"},2:{patterns:[{include:"#type"}]}},match:`(?x)
(new)\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?=\\{|$)`},"object-creation-expression-with-parameters":{begin:`(?x)
(new)\\s+
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?=\\()`,beginCaptures:{1:{name:"keyword.other.new.cs"},2:{patterns:[{include:"#type"}]}},end:"(?<=\\))",patterns:[{include:"#argument-list"}]},"operator-assignment":{match:"(?<!=|!)(=)(?!=)",name:"keyword.operator.assignment.cs"},"operator-declaration":{begin:`(?x)
(?<type_name>
  (?:
    (?:ref\\s+(?:readonly\\s+)?)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s*
(?<operator_keyword>(?:\\b(?:operator)))\\s*
(?<operator>(?:\\+|-|\\*|/|%|&|\\||\\^|\\<\\<|\\>\\>|==|!=|\\>|\\<|\\>=|\\<=|!|~|\\+\\+|--|true|false))\\s*
(?=\\()`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{name:"keyword.other.operator-decl.cs"},7:{name:"entity.name.function.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#parenthesized-parameter-list"},{include:"#expression-body"},{include:"#block"}]},"orderby-clause":{begin:"\\b(orderby)\\b\\s*",beginCaptures:{1:{name:"keyword.query.orderby.cs"}},end:"(?=;|\\))",patterns:[{include:"#ordering-direction"},{include:"#query-body"},{include:"#expression"},{include:"#punctuation-comma"}]},"ordering-direction":{captures:{1:{name:"keyword.query.ascending.cs"},2:{name:"keyword.query.descending.cs"}},match:"\\b(?:(ascending)|(descending))\\b"},parameter:{captures:{1:{name:"storage.modifier.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.parameter.cs"}},match:`(?x)
(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?
(?<type_name>
  (?:
    (?:ref\\s+)?   # ref return
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)`},"parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},"parenthesized-parameter-list":{begin:"(\\()",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"(\\))",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#attribute-section"},{include:"#parameter"},{include:"#punctuation-comma"},{include:"#variable-initializer"}]},preprocessor:{begin:"^\\s*(\\#)\\s*",beginCaptures:{1:{name:"punctuation.separator.hash.cs"}},end:"(?<=$)",name:"meta.preprocessor.cs",patterns:[{include:"#comment"},{include:"#preprocessor-define-or-undef"},{include:"#preprocessor-if-or-elif"},{include:"#preprocessor-else-or-endif"},{include:"#preprocessor-warning-or-error"},{include:"#preprocessor-region"},{include:"#preprocessor-endregion"},{include:"#preprocessor-load"},{include:"#preprocessor-r"},{include:"#preprocessor-line"},{include:"#preprocessor-pragma-warning"},{include:"#preprocessor-pragma-checksum"}]},"preprocessor-define-or-undef":{captures:{1:{name:"keyword.preprocessor.define.cs"},2:{name:"keyword.preprocessor.undef.cs"},3:{name:"entity.name.variable.preprocessor.symbol.cs"}},match:"\\b(?:(define)|(undef))\\b\\s*\\b([_[:alpha:]][_[:alnum:]]*)\\b"},"preprocessor-else-or-endif":{captures:{1:{name:"keyword.preprocessor.else.cs"},2:{name:"keyword.preprocessor.endif.cs"}},match:"\\b(?:(else)|(endif))\\b"},"preprocessor-endregion":{captures:{1:{name:"keyword.preprocessor.endregion.cs"}},match:"\\b(endregion)\\b"},"preprocessor-expression":{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#preprocessor-expression"}]},{captures:{1:{name:"constant.language.boolean.true.cs"},2:{name:"constant.language.boolean.false.cs"},3:{name:"entity.name.variable.preprocessor.symbol.cs"}},match:"\\b(?:(true)|(false)|([_[:alpha:]][_[:alnum:]]*))\\b"},{captures:{1:{name:"keyword.operator.comparison.cs"},2:{name:"keyword.operator.logical.cs"}},match:"(==|!=)|(\\!|&&|\\|\\|)"}]},"preprocessor-if-or-elif":{begin:"\\b(?:(if)|(elif))\\b",beginCaptures:{1:{name:"keyword.preprocessor.if.cs"},2:{name:"keyword.preprocessor.elif.cs"}},end:"(?=$)",patterns:[{include:"#comment"},{include:"#preprocessor-expression"}]},"preprocessor-line":{begin:"\\b(line)\\b",beginCaptures:{1:{name:"keyword.preprocessor.line.cs"}},end:"(?=$)",patterns:[{captures:{1:{name:"keyword.preprocessor.default.cs"},2:{name:"keyword.preprocessor.hidden.cs"}},match:"\\b(?:(default|hidden))"},{captures:{0:{name:"constant.numeric.decimal.cs"}},match:"[0-9]+"},{captures:{0:{name:"string.quoted.double.cs"}},match:'\\"[^"]*\\"'}]},"preprocessor-load":{begin:"\\b(load)\\b",beginCaptures:{1:{name:"keyword.preprocessor.load.cs"}},end:"(?=$)",patterns:[{captures:{0:{name:"string.quoted.double.cs"}},match:'\\"[^"]*\\"'}]},"preprocessor-pragma-checksum":{captures:{1:{name:"keyword.preprocessor.pragma.cs"},2:{name:"keyword.preprocessor.checksum.cs"},3:{name:"string.quoted.double.cs"},4:{name:"string.quoted.double.cs"},5:{name:"string.quoted.double.cs"}},match:'\\b(pragma)\\b\\s*\\b(checksum)\\b\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")\\s*(\\"[^"]*\\")'},"preprocessor-pragma-warning":{captures:{1:{name:"keyword.preprocessor.pragma.cs"},2:{name:"keyword.preprocessor.warning.cs"},3:{name:"keyword.preprocessor.disable.cs"},4:{name:"keyword.preprocessor.restore.cs"},5:{patterns:[{captures:{0:{name:"constant.numeric.decimal.cs"}},match:"[0-9]+"},{include:"#punctuation-comma"}]}},match:"\\b(pragma)\\b\\s*\\b(warning)\\b\\s*\\b(?:(disable)|(restore))\\b(\\s*[0-9]+(?:\\s*,\\s*[0-9]+)?)?"},"preprocessor-r":{begin:"\\b(r)\\b",beginCaptures:{1:{name:"keyword.preprocessor.r.cs"}},end:"(?=$)",patterns:[{captures:{0:{name:"string.quoted.double.cs"}},match:'\\"[^"]*\\"'}]},"preprocessor-region":{captures:{1:{name:"keyword.preprocessor.region.cs"},2:{name:"string.unquoted.preprocessor.message.cs"}},match:"\\b(region)\\b\\s*(.*)(?=$)"},"preprocessor-warning-or-error":{captures:{1:{name:"keyword.preprocessor.warning.cs"},2:{name:"keyword.preprocessor.error.cs"},3:{name:"string.unquoted.preprocessor.message.cs"}},match:"\\b(?:(warning)|(error))\\b\\s*(.*)(?=$)"},"property-accessors":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{match:"\\b(private|protected|internal)\\b",name:"storage.modifier.cs"},{match:"\\b(get)\\b",name:"keyword.other.get.cs"},{match:"\\b(set)\\b",name:"keyword.other.set.cs"},{match:"\\b(init)\\b",name:"keyword.other.init.cs"},{include:"#comment"},{include:"#attribute-section"},{include:"#expression-body"},{include:"#block"},{include:"#punctuation-semicolon"}]},"property-declaration":{begin:`(?x)

# The negative lookahead below ensures that we don't match nested types
# or other declarations as properties.
(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)

(?<return_type>
  (?<type_name>
    (?:
      (?:ref\\s+(?:readonly\\s+)?)?   # ref return
      (?:
        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
        (?<name_and_type_args> # identifier + type arguments (if any)
          \\g<identifier>\\s*
          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
        )
        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
      )
      (?:\\s*\\?\\s*)? # nullable suffix?
      (?:\\s* # array suffix?
        \\[
          (?:\\s*,\\s*)* # commata for multi-dimensional arrays
        \\]
        \\s*
        (?:\\?)? # arrays can be nullable reference types
        \\s*
      )*
    )
  )\\s+
)
(?<interface_name>\\g<type_name>\\s*\\.\\s*)?
(?<property_name>\\g<identifier>)\\s*
(?=\\{|=>|$)`,beginCaptures:{1:{patterns:[{include:"#type"}]},7:{patterns:[{include:"#type"},{include:"#punctuation-accessor"}]},8:{name:"entity.name.variable.property.cs"}},end:"(?<=\\})|(?=;)",patterns:[{include:"#comment"},{include:"#property-accessors"},{include:"#expression-body"},{include:"#variable-initializer"},{include:"#class-or-struct-members"}]},"punctuation-accessor":{match:"\\.",name:"punctuation.accessor.cs"},"punctuation-comma":{match:",",name:"punctuation.separator.comma.cs"},"punctuation-semicolon":{match:";",name:"punctuation.terminator.statement.cs"},"query-body":{patterns:[{include:"#let-clause"},{include:"#where-clause"},{include:"#join-clause"},{include:"#orderby-clause"},{include:"#select-clause"},{include:"#group-clause"}]},"query-expression":{begin:`(?x)
\\b(from)\\b\\s*
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?
\\s+(\\g<identifier>)\\b\\s*
\\b(in)\\b\\s*`,beginCaptures:{1:{name:"keyword.query.from.cs"},2:{patterns:[{include:"#type"}]},7:{name:"entity.name.variable.range-variable.cs"},8:{name:"keyword.query.in.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"raw-interpolated-string":{patterns:[{include:"#raw-interpolated-string-five-or-more-quote-one-or-more-interpolation"},{include:"#raw-interpolated-string-three-or-more-quote-three-or-more-interpolation"},{include:"#raw-interpolated-string-quadruple-quote-double-interpolation"},{include:"#raw-interpolated-string-quadruple-quote-single-interpolation"},{include:"#raw-interpolated-string-triple-quote-double-interpolation"},{include:"#raw-interpolated-string-triple-quote-single-interpolation"}]},"raw-interpolated-string-five-or-more-quote-one-or-more-interpolation":{begin:'\\$+"""""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs"},"raw-interpolated-string-quadruple-quote-double-interpolation":{begin:'\\$\\$""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#double-raw-interpolation"}]},"raw-interpolated-string-quadruple-quote-single-interpolation":{begin:'\\$""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#raw-interpolation"}]},"raw-interpolated-string-three-or-more-quote-three-or-more-interpolation":{begin:'\\$\\$\\$+"""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs"},"raw-interpolated-string-triple-quote-double-interpolation":{begin:'\\$\\$"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#double-raw-interpolation"}]},"raw-interpolated-string-triple-quote-single-interpolation":{begin:'\\$"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#raw-interpolation"}]},"raw-interpolation":{begin:"(?<=[^\\{]|^)((?:\\{)*)(\\{)(?=[^\\{])",beginCaptures:{1:{name:"string.quoted.double.cs"},2:{name:"punctuation.definition.interpolation.begin.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.interpolation.end.cs"}},name:"meta.interpolation.cs",patterns:[{include:"#expression"}]},"raw-string-literal":{patterns:[{include:"#raw-string-literal-more"},{include:"#raw-string-literal-quadruple"},{include:"#raw-string-literal-triple"}]},"raw-string-literal-more":{begin:'"""""+',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""""+',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs"},"raw-string-literal-quadruple":{begin:'""""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'""""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs"},"raw-string-literal-triple":{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"""',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs"},"readonly-modifier":{match:"\\b(readonly)\\b",name:"storage.modifier.cs"},"record-declaration":{begin:"(?=\\brecord\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
(record)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"keyword.other.record.cs"},2:{name:"entity.name.type.record.cs"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"ref-modifier":{match:"\\b(ref)\\b",name:"storage.modifier.cs"},"return-statement":{begin:"(?<!\\.)\\b(return)\\b",beginCaptures:{1:{name:"keyword.control.flow.return.cs"}},end:"(?=;)",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"script-top-level":{patterns:[{include:"#method-declaration"},{include:"#statement"},{include:"#punctuation-semicolon"}]},"select-clause":{begin:"\\b(select)\\b\\s*",beginCaptures:{1:{name:"keyword.query.select.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},statement:{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#while-statement"},{include:"#do-statement"},{include:"#for-statement"},{include:"#foreach-statement"},{include:"#if-statement"},{include:"#else-part"},{include:"#switch-statement"},{include:"#goto-statement"},{include:"#return-statement"},{include:"#break-or-continue-statement"},{include:"#throw-statement"},{include:"#yield-statement"},{include:"#await-statement"},{include:"#try-statement"},{include:"#checked-unchecked-statement"},{include:"#lock-statement"},{include:"#using-statement"},{include:"#labeled-statement"},{include:"#object-creation-expression"},{include:"#array-creation-expression"},{include:"#anonymous-object-creation-expression"},{include:"#local-declaration"},{include:"#block"},{include:"#expression"},{include:"#punctuation-semicolon"}]},"storage-modifier":{match:"(?<!\\.)\\b(new|public|protected|internal|private|abstract|virtual|override|sealed|static|partial|readonly|volatile|const|extern|async|unsafe|ref|required)\\b",name:"storage.modifier.cs"},"string-character-escape":{match:`\\\\(['"\\\\0abfnrtv]|x[0-9a-fA-F]{1,4}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4})`,name:"constant.character.escape.cs"},"string-literal":{begin:'(?<!@)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'(")|((?:[^\\\\\\n])$)',endCaptures:{1:{name:"punctuation.definition.string.end.cs"},2:{name:"invalid.illegal.newline.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#string-character-escape"}]},"struct-declaration":{begin:"(?=\\bstruct\\b)",end:"(?<=\\})",patterns:[{begin:`(?x)
(struct)\\b\\s+
(@?[_[:alpha:]][_[:alnum:]]*)`,beginCaptures:{1:{name:"keyword.other.struct.cs"},2:{name:"entity.name.type.struct.cs"}},end:"(?=\\{)",patterns:[{include:"#comment"},{include:"#type-parameter-list"},{include:"#base-types"},{include:"#generic-constraints"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#class-or-struct-members"}]},{include:"#preprocessor"},{include:"#comment"}]},"switch-expression":{begin:"(?x) (?<!\\.)\\b(switch)\\b",beginCaptures:{1:{name:"keyword.control.switch.cs"}},end:"(?<=\\})",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#comment"},{include:"#literal"},{include:"#switch-var-pattern"},{include:"#switch-property-expression"},{include:"#member-access-expression"},{include:"#switch-pattern"},{include:"#expression-body"},{include:"#punctuation-comma"}]}]},"switch-label":{patterns:[{begin:"(?<!\\.)\\b(case)\\b\\s+",beginCaptures:{1:{name:"keyword.control.case.cs"}},end:":",endCaptures:{0:{name:"punctuation.separator.colon.cs"}},patterns:[{include:"#expression"}]},{captures:{1:{name:"keyword.control.default.cs"},2:{name:"punctuation.separator.colon.cs"}},match:"(?<!\\.)\\b(default)\\b\\s*(:)"}]},"switch-literal":{beginCaptures:{1:{name:"constant.language.null.cs"}},match:"(?<!\\.)\\bnull\\b",name:"constant.language.null.cs",patterns:[{include:"#comment"},{include:"#punctuation-comma"},{include:"#expression-body"}]},"switch-pattern":{begin:`(?x) # e.g. int x OR var x
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)\\s+
(\\g<identifier>)\\b\\s*`,beginCaptures:{1:{patterns:[{include:"#type"}]},2:{name:"entity.name.variable.local.cs"}},end:"(?==>)",patterns:[{include:"#comment"},{include:"#switch-when-clause"}]},"switch-property-expression":{begin:`(?x) # e.g. int x OR var x
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)?\\s*
(\\{)`,beginCaptures:{1:{patterns:[{include:"#type"}]},6:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"switch-statement":{begin:"(?<!\\.)\\b(switch)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.switch.cs"}},end:"(?<=\\})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.cs"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.cs"}},patterns:[{include:"#switch-label"},{include:"#statement"}]}]},"switch-var-pattern":{begin:`(?x) # match foreach (var (x, y) in ...)
(?:\\b(var)\\b\\s*)
(?<tuple>\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*`,beginCaptures:{1:{name:"keyword.other.var.cs"},2:{patterns:[{include:"#tuple-declaration-deconstruction-element-list"}]}},end:"(?==>)",patterns:[{include:"#comment"},{include:"#switch-when-clause"}]},"switch-when-clause":{begin:"(?<!\\.)\\b(when)\\b\\s*(\\()?",beginCaptures:{1:{name:"keyword.control.try.when.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"(?==>)",patterns:[{include:"#comment"},{include:"#expression"},{include:"#punctuation-comma"},{captures:{0:{name:"punctuation.parenthesis.open.cs"}},match:"\\("},{captures:{0:{name:"punctuation.parenthesis.close.cs"}},match:"\\)"}]},"this-or-base-expression":{captures:{1:{name:"keyword.other.base.cs"},2:{name:"keyword.other.this.cs"}},match:"\\b(?:(base)|(this))\\b"},"throw-expression":{captures:{1:{name:"keyword.control.flow.throw.cs"}},match:"(?<!\\.)\\b(throw)\\b"},"throw-statement":{begin:"(?<!\\.)\\b(throw)\\b",beginCaptures:{1:{name:"keyword.control.flow.throw.cs"}},end:"(?=;)",patterns:[{include:"#expression"}]},"try-block":{begin:"(?<!\\.)\\b(try)\\b",beginCaptures:{1:{name:"keyword.control.try.cs"}},end:"(?<=\\})",patterns:[{include:"#comment"},{include:"#block"}]},"try-statement":{patterns:[{include:"#try-block"},{include:"#catch-clause"},{include:"#finally-clause"}]},"tuple-declaration-deconstruction-element-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-declaration-deconstruction-element-list"},{include:"#declaration-expression-tuple"},{include:"#punctuation-comma"},{captures:{1:{name:"entity.name.variable.tuple-element.cs"}},match:`(?x) # e.g. x
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(?=[,)])`}]},"tuple-deconstruction-assignment":{captures:{1:{patterns:[{include:"#tuple-deconstruction-element-list"}]}},match:`(?x)
(?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\\s*
(?!=>|==)(?==)`},"tuple-deconstruction-element-list":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-deconstruction-element-list"},{include:"#declaration-expression-tuple"},{include:"#punctuation-comma"},{captures:{1:{name:"variable.other.readwrite.cs"}},match:`(?x) # e.g. x
(@?[_[:alpha:]][_[:alnum:]]*)\\b\\s*
(?=[,)])`}]},"tuple-element":{captures:{1:{patterns:[{include:"#type"}]},6:{name:"entity.name.variable.tuple-element.cs"}},match:`(?x)
(?<type_name>
  (?:
    (?:
      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification
      (?<name_and_type_args> # identifier + type arguments (if any)
        \\g<identifier>\\s*
        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?
      )
      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?
      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))
    )
    (?:\\s*\\?\\s*)? # nullable suffix?
    (?:\\s* # array suffix?
      \\[
        (?:\\s*,\\s*)* # commata for multi-dimensional arrays
      \\]
      \\s*
      (?:\\?)? # arrays can be nullable reference types
      \\s*
    )*
  )
)
(?:(?<tuple_name>\\g<identifier>)\\b)?`},"tuple-literal":{begin:"(\\()(?=.*[:,])",beginCaptures:{1:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#comment"},{include:"#tuple-literal-element"},{include:"#expression"},{include:"#punctuation-comma"}]},"tuple-literal-element":{begin:`(?x)
(@?[_[:alpha:]][_[:alnum:]]*)\\s*
(?=:)`,beginCaptures:{1:{name:"entity.name.variable.tuple-element.cs"}},end:"(:)",endCaptures:{0:{name:"punctuation.separator.colon.cs"}}},"tuple-type":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#tuple-element"},{include:"#punctuation-comma"}]},type:{name:"meta.type.cs",patterns:[{include:"#comment"},{include:"#ref-modifier"},{include:"#readonly-modifier"},{include:"#tuple-type"},{include:"#type-builtin"},{include:"#type-name"},{include:"#type-arguments"},{include:"#type-array-suffix"},{include:"#type-nullable-suffix"}]},"type-arguments":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.cs"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.cs"}},patterns:[{include:"#comment"},{include:"#type"},{include:"#punctuation-comma"}]},"type-array-suffix":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.cs"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.cs"}},patterns:[{include:"#punctuation-comma"}]},"type-builtin":{captures:{1:{name:"keyword.type.cs"}},match:"\\b(bool|byte|char|decimal|double|float|int|long|object|sbyte|short|string|uint|ulong|ushort|void|dynamic)\\b"},"type-declarations":{patterns:[{include:"#preprocessor"},{include:"#comment"},{include:"#storage-modifier"},{include:"#class-declaration"},{include:"#delegate-declaration"},{include:"#enum-declaration"},{include:"#interface-declaration"},{include:"#record-declaration"},{include:"#struct-declaration"},{include:"#attribute-section"},{include:"#punctuation-semicolon"}]},"type-name":{patterns:[{captures:{1:{name:"entity.name.type.alias.cs"},2:{name:"punctuation.separator.coloncolon.cs"}},match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)"},{captures:{1:{name:"entity.name.type.cs"},2:{name:"punctuation.accessor.cs"}},match:"(@?[_[:alpha:]][_[:alnum:]]*)\\s*(\\.)"},{captures:{1:{name:"punctuation.accessor.cs"},2:{name:"entity.name.type.cs"}},match:"(\\.)\\s*(@?[_[:alpha:]][_[:alnum:]]*)"},{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.cs"}]},"type-nullable-suffix":{captures:{0:{name:"punctuation.separator.question-mark.cs"}},match:"\\?"},"type-parameter-list":{begin:"\\<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.cs"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.cs"}},patterns:[{captures:{1:{name:"storage.modifier.cs"}},match:"\\b(in|out)\\b"},{captures:{1:{name:"entity.name.type.type-parameter.cs"}},match:"(@?[_[:alpha:]][_[:alnum:]]*)\\b"},{include:"#comment"},{include:"#punctuation-comma"},{include:"#attribute-section"}]},"typeof-or-default-expression":{begin:"(?<!\\.)\\b(?:(typeof)|(default))\\b\\s*(\\()",beginCaptures:{1:{name:"keyword.other.typeof.cs"},2:{name:"keyword.other.default.cs"},3:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#type"}]},"using-directive":{patterns:[{begin:"\\b(using)\\b\\s+(static)\\s+",beginCaptures:{1:{name:"keyword.other.using.cs"},2:{name:"keyword.other.static.cs"}},end:"(?=;)",patterns:[{include:"#type"}]},{begin:"\\b(using)\\s+(?=(@?[_[:alpha:]][_[:alnum:]]*)\\s*=)",beginCaptures:{1:{name:"keyword.other.using.cs"},2:{name:"entity.name.type.alias.cs"}},end:"(?=;)",patterns:[{include:"#comment"},{include:"#type"},{include:"#operator-assignment"}]},{begin:"\\b(using)\\s*",beginCaptures:{1:{name:"keyword.other.using.cs"}},end:"(?=;)",patterns:[{include:"#comment"},{match:"@?[_[:alpha:]][_[:alnum:]]*",name:"entity.name.type.namespace.cs"},{include:"#operator-assignment"}]}]},"using-statement":{begin:"(?<!\\.)\\b(using)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.other.using.cs"}},end:"(?=\\;|})",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#local-variable-declaration"},{include:"#expression"}]},{include:"#statement"}]},"variable-initializer":{begin:"(?<!=|!)(=)(?!=|>)",beginCaptures:{1:{name:"keyword.operator.assignment.cs"}},end:"(?=[,\\)\\];}])",patterns:[{include:"#ref-modifier"},{include:"#expression"}]},"verbatim-interpolated-string":{begin:'(?:\\$@|@\\$)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"(?=[^"])',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#verbatim-string-character-escape"},{include:"#interpolation"}]},"verbatim-string-character-escape":{match:'""',name:"constant.character.escape.cs"},"verbatim-string-literal":{begin:'@"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'"(?=[^"])',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#verbatim-string-character-escape"}]},"when-clause":{begin:"(?<!\\.)\\b(when)\\b\\s*(\\()",beginCaptures:{1:{name:"keyword.control.try.when.cs"},2:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"},{include:"#comment"}]},"where-clause":{begin:`(?x)
\\b(where)\\b\\s*`,beginCaptures:{1:{name:"keyword.query.where.cs"}},end:"(?=;|\\))",patterns:[{include:"#query-body"},{include:"#expression"}]},"while-statement":{begin:"(?<!\\.)\\b(while)\\b\\s*(?=\\()",beginCaptures:{1:{name:"keyword.control.loop.while.cs"}},end:"(?<=\\})|(?=;)",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.cs"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.cs"}},patterns:[{include:"#expression"}]},{include:"#statement"}]},"xml-attribute":{patterns:[{captures:{1:{name:"entity.other.attribute-name.cs"},2:{name:"entity.other.attribute-name.namespace.cs"},3:{name:"punctuation.separator.colon.cs"},4:{name:"entity.other.attribute-name.localname.cs"},5:{name:"punctuation.separator.equals.cs"}},match:`(?x)
(?:^|\\s+)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)
(=)`},{include:"#xml-string"}]},"xml-cdata":{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:"\\]\\]>",endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.unquoted.cdata.cs"},"xml-character-entity":{patterns:[{captures:{1:{name:"punctuation.definition.constant.cs"},3:{name:"punctuation.definition.constant.cs"}},match:`(?x)
(&)
(
  (?:[[:alpha:]:_][[:alnum:]:_.-]*)|
  (?:\\#[[:digit:]]+)|
  (?:\\#x[[:xdigit:]]+)
)
(;)`,name:"constant.character.entity.cs"},{match:"&",name:"invalid.illegal.bad-ampersand.cs"}]},"xml-comment":{begin:"<!--",beginCaptures:{0:{name:"punctuation.definition.comment.cs"}},end:"-->",endCaptures:{0:{name:"punctuation.definition.comment.cs"}},name:"comment.block.cs"},"xml-doc-comment":{patterns:[{include:"#xml-comment"},{include:"#xml-character-entity"},{include:"#xml-cdata"},{include:"#xml-tag"}]},"xml-string":{patterns:[{begin:"\\'",beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:"\\'",endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.single.cs",patterns:[{include:"#xml-character-entity"}]},{begin:'\\"',beginCaptures:{0:{name:"punctuation.definition.string.begin.cs"}},end:'\\"',endCaptures:{0:{name:"punctuation.definition.string.end.cs"}},name:"string.quoted.double.cs",patterns:[{include:"#xml-character-entity"}]}]},"xml-tag":{begin:`(?x)
(</?)
(
  (?:
    ([-_[:alnum:]]+)
    (:)
  )?
  ([-_[:alnum:]]+)
)`,beginCaptures:{1:{name:"punctuation.definition.tag.cs"},2:{name:"entity.name.tag.cs"},3:{name:"entity.name.tag.namespace.cs"},4:{name:"punctuation.separator.colon.cs"},5:{name:"entity.name.tag.localname.cs"}},end:"(/?>)",endCaptures:{1:{name:"punctuation.definition.tag.cs"}},name:"meta.tag.cs",patterns:[{include:"#xml-attribute"}]},"yield-break-statement":{captures:{1:{name:"keyword.control.flow.yield.cs"},2:{name:"keyword.control.flow.break.cs"}},match:"(?<!\\.)\\b(yield)\\b\\s*\\b(break)\\b"},"yield-return-statement":{begin:"(?<!\\.)\\b(yield)\\b\\s*\\b(return)\\b",beginCaptures:{1:{name:"keyword.control.flow.yield.cs"},2:{name:"keyword.control.flow.return.cs"}},end:"(?=;)",patterns:[{include:"#expression"}]},"yield-statement":{patterns:[{include:"#yield-return-statement"},{include:"#yield-break-statement"}]}},scopeName:"source.cs"},u=n,t={extensions:[".css"],names:["css"],patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#combinators"},{include:"#selector"},{include:"#at-rules"},{include:"#rule-list"}],repository:{"at-rules":{patterns:[{begin:"\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",end:";|(?=$)",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.charset.css",patterns:[{captures:{1:{name:"invalid.illegal.not-lowercase.charset.css"},2:{name:"invalid.illegal.leading-whitespace.charset.css"},3:{name:"invalid.illegal.no-whitespace.charset.css"},4:{name:"invalid.illegal.whitespace.charset.css"},5:{name:"invalid.illegal.not-double-quoted.charset.css"},6:{name:"invalid.illegal.unclosed-string.charset.css"},7:{name:"invalid.illegal.unexpected-characters.charset.css"}},match:`(?x)        # Possible errors:
\\G
((?!@charset)@\\w+)   # Not lowercase (@charset is case-sensitive)
|
\\G(\\s+)             # Preceding whitespace
|
(@charset\\S[^;]*)    # No whitespace after @charset
|
(?<=@charset)         # Before quoted charset name
(\\x20{2,}|\\t+)      # More than one space used, or a tab
|
(?<=@charset\\x20)    # Beginning of charset name
([^";]+)              # Not double-quoted
|
("[^"]+$)             # Unclosed quote
|
(?<=")                # After charset name
([^;]+)               # Unexpected junk instead of semicolon`},{captures:{1:{name:"keyword.control.at-rule.charset.css"},2:{name:"punctuation.definition.keyword.css"}},match:"((@)charset)(?=\\s)"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"|$',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{begin:'(?:\\G|^)(?=(?:[^"])+$)',end:"$",name:"invalid.illegal.unclosed.string.css"}]}]},{begin:`(?i)((@)import)(?:\\s+|$|(?=['"]|/\\*))`,beginCaptures:{1:{name:"keyword.control.at-rule.import.css"},2:{name:"punctuation.definition.keyword.css"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.import.css",patterns:[{begin:"\\G\\s*(?=/\\*)",end:"(?<=\\*/)\\s*",patterns:[{include:"#comment-block"}]},{include:"#string"},{include:"#url"},{include:"#media-query-list"}]},{begin:"(?i)((@)font-face)(?=\\s*|{|/\\*|$)",beginCaptures:{1:{name:"keyword.control.at-rule.font-face.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?!\\G)",name:"meta.at-rule.font-face.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#rule-list"}]},{begin:"(?i)(@)page(?=[\\s:{]|/\\*|$)",captures:{0:{name:"keyword.control.at-rule.page.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*($|[:{;]))",name:"meta.at-rule.page.css",patterns:[{include:"#rule-list"}]},{begin:"(?i)(?=@media(\\s|\\(|/\\*|$))",end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)media",beginCaptures:{0:{name:"keyword.control.at-rule.media.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.media.header.css",patterns:[{include:"#media-query-list"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.media.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.media.end.bracket.curly.css"}},name:"meta.at-rule.media.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)(?=@counter-style([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)counter-style",beginCaptures:{0:{name:"keyword.control.at-rule.counter-style.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*{)",name:"meta.at-rule.counter-style.header.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.parameter.style-name.css"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.at-rule.counter-style.body.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#rule-list-innards"}]}]},{begin:`(?i)(?=@document([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)document",beginCaptures:{0:{name:"keyword.control.at-rule.document.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.document.header.css",patterns:[{begin:"(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",beginCaptures:{1:{name:"support.function.document-rule.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.document-rule.css",patterns:[{include:"#string"},{include:"#comment-block"},{include:"#escapes"},{match:`[^'")\\s]+`,name:"variable.parameter.document-rule.css"}]},{include:"#url"},{include:"#commas"},{include:"#comment-block"},{include:"#escapes"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.document.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.document.end.bracket.curly.css"}},name:"meta.at-rule.document.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'"{;]|/\\*|$))`,end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",beginCaptures:{0:{name:"keyword.control.at-rule.keyframes.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*{)",name:"meta.at-rule.keyframes.header.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.parameter.keyframe-list.css"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.keyframes.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.keyframes.end.bracket.curly.css"}},name:"meta.at-rule.keyframes.body.css",patterns:[{include:"#comment-block"},{include:"#escapes"},{captures:{1:{name:"entity.other.keyframe-offset.css"},2:{name:"entity.other.keyframe-offset.percentage.css"}},match:`(?xi)
(?<![\\w-]) (from|to) (?![\\w-])         # Keywords for 0% | 100%
|
([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)     # Percentile value`},{include:"#rule-list"}]}]},{begin:"(?i)(?=@supports(\\s|\\(|/\\*|$))",end:"(?<=})(?!\\G)|(?=;)",patterns:[{begin:"(?i)\\G(@)supports",beginCaptures:{0:{name:"keyword.control.at-rule.supports.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.supports.header.css",patterns:[{include:"#feature-query-operators"},{include:"#feature-query"},{include:"#comment-block"},{include:"#escapes"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.section.supports.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.supports.end.bracket.curly.css"}},name:"meta.at-rule.supports.body.css",patterns:[{include:"$self"}]}]},{begin:`(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'"{;]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.viewport.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[@{;])",name:"meta.at-rule.viewport.css",patterns:[{include:"#comment-block"},{include:"#escapes"}]},{begin:`(?i)((@)font-feature-values)(?=[\\s'"{;]|/\\*|$)\\s*`,beginCaptures:{1:{name:"keyword.control.at-rule.font-feature-values.css"},2:{name:"punctuation.definition.keyword.css"}},contentName:"variable.parameter.font-name.css",end:"(?=\\s*[@{;])",name:"meta.at-rule.font-features.css",patterns:[{include:"#comment-block"},{include:"#escapes"}]},{include:"#font-features"},{begin:`(?i)((@)namespace)(?=[\\s'";]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.namespace.css"},2:{name:"punctuation.definition.keyword.css"}},end:";|(?=[@{])",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.namespace.css",patterns:[{include:"#url"},{captures:{1:{patterns:[{include:"#comment-block"}]},2:{name:"entity.name.function.namespace-prefix.css",patterns:[{include:"#escapes"}]}},match:`(?xi)
(?:\\G|^|(?<=\\s))
(?=
  (?<=\\s|^)                             # Starts with whitespace
  (?:[-a-zA-Z_]|[^\\x00-\\x7F])          # Then a valid identifier character
  |
  \\s*                                   # Possible adjoining whitespace
  /\\*(?:[^*]|\\*[^/])*\\*/              # Injected comment
)
(.*?)                                    # Grouped to embed #comment-block
(
  (?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
  (?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
    |\\\\(?:[0-9a-fA-F]{1,6}|.)
  )*
)`},{include:"#comment-block"},{include:"#escapes"},{include:"#string"}]},{begin:"(?i)(?=@[\\w-]+[^;]+;s*$)",end:"(?<=;)(?!\\G)",patterns:[{begin:"(?i)\\G(@)[\\w-]+",beginCaptures:{0:{name:"keyword.control.at-rule.css"},1:{name:"punctuation.definition.keyword.css"}},end:";",endCaptures:{0:{name:"punctuation.terminator.rule.css"}},name:"meta.at-rule.header.css"}]},{begin:"(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",end:"(?<=})(?!\\G)",patterns:[{begin:"(?i)\\G(@)[\\w-]+",beginCaptures:{0:{name:"keyword.control.at-rule.css"},1:{name:"punctuation.definition.keyword.css"}},end:"(?=\\s*[{;])",name:"meta.at-rule.header.css"},{begin:"{",beginCaptures:{0:{name:"punctuation.section.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.end.bracket.curly.css"}},name:"meta.at-rule.body.css",patterns:[{include:"$self"}]}]}]},"color-keywords":{patterns:[{match:"(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",name:"support.constant.color.w3c-standard-color-name.css"},{match:`(?xi) (?<![\\w-])
(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood
|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan
|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange
|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise
|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen
|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki
|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow
|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray
|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue
|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise
|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered
|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum
|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell
|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato
|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)
(?![\\w-])`,name:"support.constant.color.w3c-extended-color-name.css"},{match:"(?i)(?<![\\w-])currentColor(?![\\w-])",name:"support.constant.color.current.css"},{match:`(?xi) (?<![\\w-])
(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow
|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption
|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow
|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)
(?![\\w-])`,name:"invalid.deprecated.color.system.css"}]},combinators:{patterns:[{match:"/deep/|>>>",name:"invalid.deprecated.combinator.css"},{match:">>|>|\\+|~",name:"keyword.operator.combinator.css"}]},commas:{match:",",name:"punctuation.separator.list.comma.css"},"comment-block":{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.css"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.css"}},name:"comment.block.css"},escapes:{patterns:[{match:"\\\\[0-9a-fA-F]{1,6}",name:"constant.character.escape.codepoint.css"},{begin:"\\\\$\\s*",end:"^(?<!\\G)",name:"constant.character.escape.newline.css"},{match:"\\\\.",name:"constant.character.escape.css"}]},"feature-query":{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.condition.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.condition.end.bracket.round.css"}},name:"meta.feature-query.css",patterns:[{include:"#feature-query-operators"},{include:"#feature-query"}]},"feature-query-operators":{patterns:[{match:"(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",name:"keyword.operator.logical.feature.$1.css"},{include:"#rule-list-innards"}]},"font-features":{begin:`(?xi)
((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))
(?=[\\s@'"{;]|/\\*|$)`,beginCaptures:{1:{name:"keyword.control.at-rule.${3:/downcase}.css"},2:{name:"punctuation.definition.keyword.css"}},end:"(?<=})",name:"meta.at-rule.${3:/downcase}.css",patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.property-list.font-feature.css",patterns:[{captures:{0:{patterns:[{include:"#escapes"}]}},match:`(?x)
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier
  | \\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.font-feature.css"},{include:"#rule-list-innards"}]}]},"functional-pseudo-classes":{patterns:[{begin:"(?i)((:)dir)(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#comment-block"},{include:"#escapes"},{match:"(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",name:"support.constant.text-direction.css"},{include:"#property-values"}]},{begin:"(?i)((:)lang)(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{match:"(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",name:"support.constant.language-range.css"},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{include:"#escapes"},{match:'(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])',name:"support.constant.language-range.css"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{include:"#escapes"},{match:"(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",name:"support.constant.language-range.css"}]},{include:"#commas"}]},{begin:"(?i)((:)(?:not|has|matches))(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#selector-innards"}]},{begin:"(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",beginCaptures:{1:{name:"entity.other.attribute-name.pseudo-class.css"},2:{name:"punctuation.definition.entity.css"},3:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{match:"(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",name:"constant.numeric.css"},{match:"(?i)even|odd",name:"support.constant.parity.css"}]}]},functions:{patterns:[{begin:"(?i)(?<![\\w-])(calc)(\\()",beginCaptures:{1:{name:"support.function.calc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.calc.css",patterns:[{match:"[*/]|(?<=\\s|^)[-+](?=\\s|$)",name:"keyword.operator.arithmetic.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(rgba?|hsla?|hwb|lab|lch)(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.color.css",patterns:[{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
(
  (?:-webkit-|-moz-|-o-)?    # Accept prefixed/historical variants
  (?:repeating-)?            # "Repeating"-type gradient
  (?:linear|radial|conic)    # Shape
  -gradient
)
(\\()`,beginCaptures:{1:{name:"support.function.gradient.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.gradient.css",patterns:[{match:"(?i)(?<![\\w-])(from|to|at)(?![\\w-])",name:"keyword.operator.gradient.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(-webkit-gradient)(\\()",beginCaptures:{1:{name:"invalid.deprecated.gradient.function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.gradient.invalid.deprecated.gradient.css",patterns:[{begin:"(?i)(?<![\\w-])(from|to|color-stop)(\\()",beginCaptures:{1:{name:"invalid.deprecated.function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#property-values"}]},{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?
|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate
|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia
|styleset|stylistic|swash|symbols)
(\\()`,beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.misc.css",patterns:[{match:`(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"')]|/\\*|$)`,name:"constant.numeric.other.density.css"},{include:"#property-values"},{match:`[^'"),\\s]+`,name:"variable.parameter.misc.css"}]},{begin:"(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",beginCaptures:{1:{name:"support.function.shape.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.shape.css",patterns:[{match:"(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",name:"keyword.operator.shape.css"},{include:"#property-values"}]},{begin:"(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",beginCaptures:{1:{name:"support.function.timing-function.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.timing-function.css",patterns:[{match:"(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",name:"support.constant.step-direction.css"},{include:"#property-values"}]},{begin:`(?xi) (?<![\\w-])
( (?:translate|scale|rotate)(?:[XYZ]|3D)?
| matrix(?:3D)?
| skew[XY]?
| perspective
)
(\\()`,beginCaptures:{1:{name:"support.function.transform.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},patterns:[{include:"#property-values"}]},{include:"#url"},{begin:"(?i)(?<![\\w-])(var)(\\()",beginCaptures:{1:{name:"support.function.misc.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.variable.css",patterns:[{match:`(?x)
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.argument.css"},{include:"#property-values"}]}]},"media-feature-keywords":{match:`(?xi)
(?<=^|\\s|:|\\*/)
(?: portrait                  # Orientation
  | landscape
  | progressive               # Scan types
  | interlace
  | fullscreen                # Display modes
  | standalone
  | minimal-ui
  | browser
  | hover
)
(?=\\s|\\)|$)`,name:"support.constant.property-value.css"},"media-features":{captures:{1:{name:"support.type.property-name.media.css"},2:{name:"support.type.property-name.media.css"},3:{name:"support.type.vendored.property-name.media.css"}},match:`(?xi)
(?<=^|\\s|\\(|\\*/)           # Preceded by whitespace, bracket or comment
(?:
  # Standardised features
  (
    (?:min-|max-)?            # Range features
    (?: height
      | width
      | aspect-ratio
      | color
      | color-index
      | monochrome
      | resolution
    )
    | grid                    # Discrete features
    | scan
    | orientation
    | display-mode
    | hover
  )
  |
  # Deprecated features
  (
    (?:min-|max-)?            # Deprecated in Media Queries 4
    device-
    (?: height
      | width
      | aspect-ratio
    )
  )
  |
  # Vendor extensions
  (
    (?:
      # Spec-compliant syntax
      [-_]
      (?: webkit              # Webkit/Blink
        | apple|khtml         # Webkit aliases
        | epub                # ePub3
        | moz                 # Gecko
        | ms                  # Microsoft
        | o                   # Presto (pre-Opera 15)
        | xv|ah|rim|atsc|     # Less common vendors
          hp|tc|wap|ro
      )
      |
      # Non-standard prefixes
      (?: mso                 # Microsoft Office
        | prince              # YesLogic
      )
    )
    -
    [\\w-]+                   # Feature name
    (?=                       # Terminates correctly
      \\s*                    # Possible whitespace
      (?:                     # Possible injected comment
        /\\*
        (?:[^*]|\\*[^/])*
        \\*/
      )?
      \\s*
      [:)]                    # Ends with a colon or closed bracket
    )
  )
)
(?=\\s|$|[><:=]|\\)|/\\*)     # Terminates cleanly`},"media-query":{begin:"\\G",end:"(?=\\s*[{;])",patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#media-types"},{match:"(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",name:"keyword.operator.logical.$1.media.css"},{match:"(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",name:"keyword.operator.logical.and.media.css"},{match:",(?:(?:\\s*,)+|(?=\\s*[;){]))",name:"invalid.illegal.comma.css"},{include:"#commas"},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.css"}},patterns:[{include:"#media-features"},{include:"#media-feature-keywords"},{match:":",name:"punctuation.separator.key-value.css"},{match:">=|<=|=|<|>",name:"keyword.operator.comparison.css"},{captures:{1:{name:"constant.numeric.css"},2:{name:"keyword.operator.arithmetic.css"},3:{name:"constant.numeric.css"}},match:"(\\d+)\\s*(/)\\s*(\\d+)",name:"meta.ratio.css"},{include:"#numeric-values"},{include:"#comment-block"}]}]},"media-query-list":{begin:"(?=\\s*[^{;])",end:"(?=\\s*[{;])",patterns:[{include:"#media-query"}]},"media-types":{captures:{1:{name:"support.constant.media.css"},2:{name:"invalid.deprecated.constant.media.css"}},match:`(?xi)
(?<=^|\\s|,|\\*/)
(?:
  # Valid media types
  (all|print|screen|speech)
  |
  # Deprecated in Media Queries 4: http://dev.w3.org/csswg/mediaqueries/#media-types
  (aural|braille|embossed|handheld|projection|tty|tv)
)
(?=$|[{,\\s;]|/\\*)`},"numeric-values":{patterns:[{captures:{1:{name:"punctuation.definition.constant.css"}},match:"(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",name:"constant.other.color.rgb-value.hex.css"},{captures:{1:{name:"keyword.other.unit.percentage.css"},2:{name:"keyword.other.unit.${2:/downcase}.css"}},match:`(?xi) (?<![\\w-])
[-+]?                               # Sign indicator

(?:                                 # Numerals
    [0-9]+ (?:\\.[0-9]+)?           # Integer/float with leading digits
  | \\.[0-9]+                       # Float without leading digits
)

(?:                                 # Scientific notation
  (?<=[0-9])                        # Exponent must follow a digit
  E                                 # Exponent indicator
  [-+]?                             # Possible sign indicator
  [0-9]+                            # Exponent value
)?

(?:                                 # Possible unit for data-type:
  (%)                               # - Percentage
  | ( deg|grad|rad|turn             # - Angle
    | Hz|kHz                        # - Frequency
    | ch|cm|em|ex|fr|in|mm|mozmm|   # - Length
      pc|pt|px|q|rem|vh|vmax|vmin|
      vw
    | dpi|dpcm|dppx                 # - Resolution
    | s|ms                          # - Time
    )
  \\b                               # Boundary checking intentionally lax to
)?                                  # facilitate embedding in CSS-like grammars`,name:"constant.numeric.css"}]},"property-keywords":{patterns:[{match:`(?xi) (?<![\\w-])
(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse
|always|antialiased|auto|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel
|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets
|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn
|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover
|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures
|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in
|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded
|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze
|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide
|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space
|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start
|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83
|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB
|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent
|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize
|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures
|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize
|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding
|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line
|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]
|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text
|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate
|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller
|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap
|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table
|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl
|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle
|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical
|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy
|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)
(?![\\w-])`,name:"support.constant.property-value.css"},{match:`(?xi) (?<![\\w-])
(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic
|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am
|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew
|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer
|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek
|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal
|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian
|upper-latin|upper-roman|urdu)
(?![\\w-])`,name:"support.constant.property-value.list-style-type.css"},{match:"(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",name:"support.constant.vendored.property-value.css"},{match:"(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",name:"support.constant.font-name.css"}]},"property-names":{patterns:[{match:`(?xi) (?<![\\w-])
(?:
  # Standard CSS
  accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration
  | animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter
  | backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image
  | background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border
  | border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color
  | border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius
  | border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image
  | border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end
  | border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color
  | border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width
  | border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius
  | border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style
  | border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side
  | caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap
  | column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|content|counter-increment
  | counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis
  | flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family
  | font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch
  | font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures
  | font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical
  | grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start
  | grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows
  | hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align
  | inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation
  | justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style
  | list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start
  | margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset
  | mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode
  | mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width
  | max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position
  | offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans
  | outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline
  | overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]
  | pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left
  | padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin
  | place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align
  | ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start
  | scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right
  | scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom
  | scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right
  | scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type
  | scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size
  | speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit
  | stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright
  | text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style
  | text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation
  | text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform
  | transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function
  | translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change
  | word-break|word-spacing|word-wrap|writing-mode|z-index|zoom

  # SVG attributes
  | alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile
  | color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity
  | glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid
  | marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap
  | stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y

  # Not listed on MDN; presumably deprecated
  | adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break
  | balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length
  | bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction
  | box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column
  | column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break
  | delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust
  | drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position
  | flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before
  | hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust
  | initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count
  | justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift
  | line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed
  | marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group
  | orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range
  | play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim
  | radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness
  | right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color
  | rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral
  | speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch
  | string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height
  | text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style
  | top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range
  | voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap
)
(?![\\w-])`,name:"support.type.property-name.css"},{match:"(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",name:"support.type.vendored.property-name.css"}]},"property-values":{patterns:[{include:"#commas"},{include:"#comment-block"},{include:"#escapes"},{include:"#functions"},{include:"#property-keywords"},{include:"#unicode-range"},{include:"#numeric-values"},{include:"#color-keywords"},{include:"#string"},{match:"!\\s*important(?![\\w-])",name:"keyword.other.important.css"}]},"pseudo-classes":{captures:{1:{name:"punctuation.definition.entity.css"},2:{name:"invalid.illegal.colon.css"}},match:`(?xi)
(:)(:*)
(?: active|any-link|checked|default|disabled|empty|enabled|first
  | (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover
  | in-range|indeterminate|invalid|left|link|optional|out-of-range
  | read-only|read-write|required|right|root|scope|target|unresolved
  | valid|visited
)(?![\\w-]|\\s*[;}])`,name:"entity.other.attribute-name.pseudo-class.css"},"pseudo-elements":{captures:{1:{name:"punctuation.definition.entity.css"},2:{name:"punctuation.definition.entity.css"}},match:`(?xi)
(?:
  (::?)                       # Elements using both : and :: notation
  (?: after
    | before
    | first-letter
    | first-line
    | (?:-(?:ah|apple|atsc|epub|hp|khtml|moz
            |ms|o|rim|ro|tc|wap|webkit|xv)
        | (?:mso|prince))
      -[a-z-]+
  )
  |
  (::)                        # Double-colon only
  (?: backdrop
    | content
    | grammar-error
    | marker
    | placeholder
    | selection
    | shadow
    | spelling-error
  )
)
(?![\\w-]|\\s*[;}])`,name:"entity.other.attribute-name.pseudo-element.css"},"rule-list":{begin:"{",beginCaptures:{0:{name:"punctuation.section.property-list.begin.bracket.curly.css"}},end:"}",endCaptures:{0:{name:"punctuation.section.property-list.end.bracket.curly.css"}},name:"meta.property-list.css",patterns:[{include:"#rule-list-innards"}]},"rule-list-innards":{patterns:[{include:"#comment-block"},{include:"#escapes"},{include:"#font-features"},{match:`(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier
  |\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,name:"variable.css"},{begin:"(?<![-a-zA-Z])(?=[-a-zA-Z])",end:"$|(?![-a-zA-Z])",name:"meta.property-name.css",patterns:[{include:"#property-names"}]},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.key-value.css"}},contentName:"meta.property-value.css",end:"\\s*(;)|\\s*(?=}|\\))",endCaptures:{1:{name:"punctuation.terminator.rule.css"}},patterns:[{include:"#comment-block"},{include:"#property-values"}]},{match:";",name:"punctuation.terminator.rule.css"}]},selector:{begin:`(?x)
(?=
  (?:\\|)?                    # Possible anonymous namespace prefix
  (?:
    [-\\[:.*\\#a-zA-Z_]       # Valid selector character
    |
    [^\\x00-\\x7F]            # Which can include non-ASCII symbols
    |
    \\\\                      # Or an escape sequence
    (?:[0-9a-fA-F]{1,6}|.)
  )
)`,end:"(?=\\s*[/@{)])",name:"meta.selector.css",patterns:[{include:"#selector-innards"}]},"selector-innards":{patterns:[{include:"#comment-block"},{include:"#commas"},{include:"#escapes"},{include:"#combinators"},{captures:{1:{name:"entity.other.namespace-prefix.css"},2:{name:"punctuation.separator.css"}},match:`(?x)
(?:^|(?<=[\\s,(};]))         # Follows whitespace, comma, semicolon, or bracket
(?!
  [-\\w*]+
  \\|
  (?!
      [-\\[:.*\\#a-zA-Z_]    # Make sure there's a selector to match
    | [^\\x00-\\x7F]
  )
)
(
  (?: [-a-zA-Z_]    | [^\\x00-\\x7F] )   # First letter
  (?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]     # Remainder of identifier
    | \\\\(?:[0-9a-fA-F]{1,6}|.)
  )*
  |
  \\*     # Universal namespace
)?
(\\|)     # Namespace separator`},{include:"#tag-names"},{match:"\\*",name:"entity.name.tag.wildcard.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x) (?<![@\\w-])
([.\\#])
# Invalid identifier
(
  (?:
    # Starts with ASCII digits, with possible hyphen preceding it
    -?[0-9]
    |
    # Consists of a hyphen only
    -                                      # Terminated by either:
    (?= $                                  # - End-of-line
      | [\\s,.\\#)\\[:{>+~|]               # - Followed by another selector
      | /\\*                               # - Followed by a block comment
    )
    |
    # Name contains unescaped ASCII symbol
    (?:                                    # Check for acceptable preceding characters
        [-a-zA-Z_0-9]|[^\\x00-\\x7F]       # - Valid selector character
      | \\\\(?:[0-9a-fA-F]{1,6}|.)         # - Escape sequence
    )*
    (?:                                    # Invalid punctuation
      [!"'%&(*;<?@^\`|\\]}]                 # - NOTE: We exempt \`)\` from the list of checked
      |                                    #   symbols to avoid matching \`:not(.invalid)\`
      / (?!\\*)                            # - Avoid invalidating the start of a comment
    )+
  )
  # Mark remainder of selector invalid
  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]         # - Otherwise valid identifier characters
    | \\\\(?:[0-9a-fA-F]{1,6}|.)           # - Escape sequence
  )*
)`,name:"invalid.illegal.bad-identifier.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x)
(\\.)                                  # Valid class-name
(
  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]     # Valid identifier characters
    | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence
  )+
)                                      # Followed by either:
(?= $                                  # - End of the line
  | [\\s,.\\#)\\[:{>+~|]               # - Another selector
  | /\\*                               # - A block comment
)`,name:"entity.other.attribute-name.class.css"},{captures:{1:{name:"punctuation.definition.entity.css"},2:{patterns:[{include:"#escapes"}]}},match:`(?x)
(\\#)
(
  -?
  (?![0-9])
  (?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
)
(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)`,name:"entity.other.attribute-name.id.css"},{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.entity.begin.bracket.square.css"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.entity.end.bracket.square.css"}},name:"meta.attribute-selector.css",patterns:[{include:"#comment-block"},{include:"#string"},{captures:{1:{name:"storage.modifier.ignore-case.css"}},match:`(?<=["'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)`},{captures:{1:{name:"string.unquoted.attribute-value.css",patterns:[{include:"#escapes"}]}},match:`(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\"'\\s\\]]|\\\\.)+)`},{include:"#escapes"},{match:"[~|^$*]?=",name:"keyword.operator.pattern.css"},{match:"\\|",name:"punctuation.separator.css"},{captures:{1:{name:"entity.other.namespace-prefix.css",patterns:[{include:"#escapes"}]}},match:`(?x)
# Qualified namespace prefix
( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
| \\*
)
# Lookahead to ensure there's a valid identifier ahead
(?=
  \\| (?!\\s|=|$|\\])
  (?: -?(?!\\d)
   |   [\\\\\\w-]
   |   [^\\x00-\\x7F]
   )
)`},{captures:{1:{name:"entity.other.attribute-name.css",patterns:[{include:"#escapes"}]}},match:`(?x)
(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)
\\s*
(?=[~|^\\]$*=]|/\\*)`}]},{include:"#pseudo-classes"},{include:"#pseudo-elements"},{include:"#functional-pseudo-classes"},{match:`(?x) (?<![@\\w-])
(?=            # Custom element names must:
  [a-z]        # - start with a lowercase ASCII letter,
  \\w* -       # - contain at least one dash
)
(?:
  (?![A-Z])    # No uppercase ASCII letters are allowed
  [\\w-]       # Allow any other word character or dash
)+
(?![(\\w-])`,name:"entity.name.tag.custom.css"}]},string:{patterns:[{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:'"|(?<!\\\\)(?=$|\\n)',endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.double.css",patterns:[{begin:'(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)',end:"$",name:"invalid.illegal.unclosed.string.css",patterns:[{include:"#escapes"}]},{include:"#escapes"}]},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.css"}},end:"'|(?<!\\\\)(?=$|\\n)",endCaptures:{0:{name:"punctuation.definition.string.end.css"}},name:"string.quoted.single.css",patterns:[{begin:"(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",end:"$",name:"invalid.illegal.unclosed.string.css",patterns:[{include:"#escapes"}]},{include:"#escapes"}]}]},"tag-names":{match:`(?xi) (?<![\\w:-])
(?:
    # HTML
    a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound
  | big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command
  | content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset
  | figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i
  | iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark
  | marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript
  | object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc
  | ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong
  | style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr
  | track|tt|u|ul|var|video|wbr|xmp

  # SVG
  | altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform
  | circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix
  | feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap
  | feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur
  | feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting
  | feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name
  | font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern
  | line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata
  | missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor
  | stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern

  # MathML
  | annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced
  | mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot
  | mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup
  | msup|mtable|mtd|mtext|mtr|munder|munderover|semantics
)
(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)`,name:"entity.name.tag.css"},"unicode-range":{captures:{0:{name:"constant.other.unicode-range.css"},1:{name:"punctuation.separator.dash.unicode-range.css"}},match:"(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"},url:{begin:"(?i)(?<![\\w@-])(url)(\\()",beginCaptures:{1:{name:"support.function.url.css"},2:{name:"punctuation.section.function.begin.bracket.round.css"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.function.end.bracket.round.css"}},name:"meta.function.url.css",patterns:[{match:`[^'")\\s]+`,name:"variable.parameter.url.css"},{include:"#string"},{include:"#comment-block"},{include:"#escapes"}]}},scopeName:"source.css"},p=t,a={extensions:["._js",".bones",".cjs",".code-snippets",".cy",".es",".es6",".frag",".gs",".jake",".javascript",".js",".js.erb",".jsb",".jscad",".jsfl",".jslib",".jsm",".json5",".jsonc",".jsonld",".jspre",".jss",".jsx",".mjs",".njs",".pac",".qs",".sjs",".ssjs",".sublime-build",".sublime-commands",".sublime-completions",".sublime-keymap",".sublime-macro",".sublime-menu",".sublime-mousemap",".sublime-project",".sublime-settings",".sublime-theme",".sublime-workspace",".sublime_metrics",".sublime_session",".xsjs",".xsjslib"],names:["cycript","javascript","javascript+erb","js","json-with-comments","json5","jsonc","jsonld","node","qt-script"],patterns:[{begin:"(?<!\\.)\\b(import)(?!\\s*[:(])\\b",beginCaptures:{1:{name:"keyword.control.js"}},end:"(?=;|$)",name:"meta.import.js",patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.definition.modules.begin.js"}},end:"}",endCaptures:{0:{name:"punctuation.definition.modules.end.js"}},patterns:[{captures:{1:{name:"variable.language.default.js"},2:{name:"variable.other.module.js"},3:{name:"keyword.control.js"},4:{name:"invalid.illegal.js"},5:{name:"variable.other.module-alias.js"}},match:`(?x)
(?: \\b(default)\\b | \\b([a-zA-Z_$][\\w$]*)\\b)
\\s*
(\\b as \\b)
\\s*
(?: (\\b default \\b | \\*) | \\b([a-zA-Z_$][\\w$]*)\\b)`},{match:",",name:"meta.delimiter.object.comma.js"},{include:"#comments"},{match:"\\b([a-zA-Z_$][\\w$]*)\\b",name:"variable.other.module.js"}]},{captures:{1:{name:"variable.language.default.js"},2:{name:"variable.language.import-all.js"},3:{name:"variable.other.module.js"},4:{name:"keyword.control.js"},5:{name:"invalid.illegal.js"},6:{name:"variable.other.module-alias.js"}},match:`(?x)
(?: \\b(default)\\b | (\\*) | \\b([a-zA-Z_$][\\w$]*)\\b)
\\s*
(\\b as \\b)
\\s*
(?: (\\b default \\b | \\*) | \\b([a-zA-Z_$][\\w$]*)\\b)`},{match:"\\*",name:"variable.language.import-all.js"},{match:"\\b(default)\\b",name:"variable.language.default.js"},{include:"#strings"},{include:"#comments"},{match:"\\b(from)\\b",name:"keyword.control.js"},{match:"\\b([a-zA-Z_$][\\w$]*)\\b(?=.*\\bfrom\\b)",name:"variable.other.module.js"},{match:",",name:"meta.delimiter.object.comma.js"}]},{captures:{0:{name:"meta.export.js"},1:{name:"keyword.control.js"},2:{name:"variable.language.default.js"},3:{name:"variable.other.module.js"}},match:`(?x)
\\b(export)\\b\\s*
\\b(default)\\b\\s*
\\b((?!\\b(?:function|class|let|var|const)\\b)[a-zA-Z_$][\\w$]*)?\\b`},{begin:"(?<!\\.)\\b(export)(?!\\s*[:(])\\b",beginCaptures:{1:{name:"keyword.control.js"}},end:"(?=;|\\bfunction\\b|\\bclass\\b|\\blet\\b|\\bvar\\b|\\bconst\\b|$)",name:"meta.export.js",patterns:[{include:"#numbers"},{begin:"(?![a-zA-Z_$0-9]){",beginCaptures:{0:{name:"punctuation.definition.modules.begin.js"}},end:"}",endCaptures:{0:{name:"punctuation.definition.modules.end.js"}},patterns:[{captures:{1:{name:"variable.language.default.js"},2:{name:"variable.other.module.js"},3:{name:"keyword.control.js"},4:{name:"variable.language.default.js"},5:{name:"invalid.illegal.js"},6:{name:"variable.other.module-alias.js"}},match:`(?x)
(?: \\b(default)\\b | \\b([a-zA-Z_$][\\w$]*)\\b)
\\s*
(\\b as \\b)
\\s*
(?: \\b(default)\\b | (\\*) | \\b([a-zA-Z_$][\\w$]*)\\b)`},{include:"#comments"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\b([a-zA-Z_$][\\w$]*)\\b",name:"variable.other.module.js"}]},{match:"\\*(?=.*\\bfrom\\b)",name:"variable.language.import-all.js"},{match:"\\b(default)\\b",name:"variable.language.default.js"},{include:"#strings"},{include:"#comments"},{match:"\\b(from)\\b",name:"keyword.control.js"},{match:"\\b([a-zA-Z_$][\\w$]*)\\b",name:"variable.other.module.js"},{match:",",name:"meta.delimiter.object.comma.js"},{include:"#operators"}]},{match:"(?:(?<=\\.{3})|(?<!\\.)\\b)(?<!\\$)(super|this|arguments)(?!\\s*:|\\$)\\b",name:"variable.language.js"},{begin:"(?=(\\basync\\b\\s*)?\\bfunction\\b(?!\\s*:))",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.js",patterns:[{include:"#function_innards"}]}]},{begin:"(?=(\\.)?[a-zA-Z_$][\\w$]*\\s*=\\s*(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?!\\G)(?<=\\))",name:"meta.function.js",patterns:[{captures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"entity.name.function.js"},3:{name:"keyword.operator.assignment.js"}},match:"(\\.)?([a-zA-Z_$][\\w$]*)\\s*(=)\\s*"},{include:"#function_innards"}]}]},{begin:"(?=\\b[a-zA-Z_$][\\w$]*\\s*:\\s*(\\basync\\b\\s*)?\\bfunction\\b)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.json.js",patterns:[{captures:{1:{name:"entity.name.function.js"},2:{name:"keyword.operator.assignment.js"}},match:"\\b([a-zA-Z_$][\\w$]*)\\s*(:)\\s*"},{include:"#function_innards"}]}]},{begin:`(?=(('[^']*?')|("[^"]*?"))\\s*:\\s*(\\basync\\b\\s*)?\\bfunction\\b)`,end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.json.js",patterns:[{captures:{1:{name:"string.quoted.single.js"},2:{name:"punctuation.definition.string.begin.js"},3:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.end.js"},5:{name:"string.quoted.double.js"},6:{name:"punctuation.definition.string.begin.js"},7:{name:"entity.name.function.js"},8:{name:"punctuation.definition.string.end.js"},9:{name:"keyword.operator.assignment.js"}},match:`(?:((')([^']*?)('))|((")([^"]*?)(")))\\s*(:)`},{include:"#function_innards"}]}]},{begin:"(?=\\bconstructor\\b\\s*)",end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.js",patterns:[{match:"\\b(constructor)\\s*",name:"entity.name.function.constructor.js"},{include:"#function_innards"}]}]},{begin:`(?x)
(?=
  (?!
    (break|case|catch|continue|do|else|finally|for|function|if|
    return|switch|throw|try|while|with)
    [\\s\\(]
  )
  (
    \\b(get|set)            # Property getter/setter: get foo(){}
    (?:\\s+|(?=\\[))        # Followed by whitespace or square bracket
  )?+
  (                         # Method name
    \\b[a-zA-Z_$][\\w$]*    # Fixed name
    |
    \\[                     # Computed property key
      [^\\[\\]]++           # Contains at least one non-brace character
    \\]
  )
  \\s*\\(\\s*               # Start of arguments list
    (
      "[^"]*"  |            # Double-quoted string
      '[^']*'  |            # Single-quoted string
       [^"()']              # Any non-bracket or non-quote
    )*
  \\)\\s*                   # End of arguments
  {                         # Beginning of body
)`,end:"(?<=})",patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=\\))",name:"meta.function.method.definition.js",patterns:[{captures:{1:{name:"punctuation.definition.computed-key.begin.bracket.square.js"},2:{patterns:[{include:"$self"},{match:"[a-zA-Z_$][\\w$]*",name:"variable.parameter.property.js"}]},3:{name:"punctuation.definition.computed-key.end.bracket.square.js"}},match:"(\\[)(.+)(\\])(?=\\s*\\()",name:"meta.computed-key.js"},{match:"\\b(get|set)(?=\\s*\\[.+\\]\\s*\\(|\\s+[^\\s\\[(]+\\s*\\()",name:"keyword.operator.$1ter.js"},{match:"\\b([a-zA-Z_$][\\w$]*)",name:"entity.name.function.js"},{include:"#function_params"}]}]},{begin:`(?x)
(?=
  (?<![A-Za-z0-9])
  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)
  \\s*=>
)`,end:`(?x)
(?<=})|
((?!
  \\s*{|
  \\G\\(|
  \\G[\\w$]+|
  \\s*/\\*|\\s*//
)(?=\\s*\\S))`,patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.js",patterns:[{include:"#arrow_function_innards"}]}]},{begin:`(?x)
(?=
  (\\.)?[a-zA-Z_$][\\w$]*
  \\s*(=)\\s*
  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)
  \\s*=>
)`,end:`(?x)
(?<=})|
((?!
  \\s*{|
  \\G(\\.)?[a-zA-Z_$][\\w$]*\\s*(=)\\s*\\(|
  \\G(\\.)?[a-zA-Z_$][\\w$]*\\s*(=)\\s*[\\w$]+|
  \\s*/\\*|\\s*//
)(?=\\s*\\S))`,patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.js",patterns:[{captures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"entity.name.function.js"},3:{name:"keyword.operator.assignment.js"}},match:"\\G(\\.)?([a-zA-Z_$][\\w$]*)\\s*(=)"},{include:"#arrow_function_innards"}]}]},{begin:`(?x)
(?=
  \\b[a-zA-Z_$][\\w$]*
  \\s*:\\s*
  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)
  \\s*=>
)`,end:`(?x)
(?<=})|
((?!
  \\s*{|
  \\G[\\w$]+\\s*:|
  \\s*/\\*|\\s*//
)(?=\\s*\\S))`,patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.json.js",patterns:[{captures:{1:{name:"entity.name.function.js"},2:{name:"keyword.operator.assignment.js"}},match:"\\b([a-zA-Z_$][\\w$]*)\\s*(:)\\s*"},{include:"#arrow_function_innards"}]}]},{begin:`(?x)
(?=
  (('[^']*?')|("[^"]*?"))
  \\s*:\\s*
  ((\\(([^\\(\\)]*)?\\))|[\\w$]+)
  \\s*=>
)`,end:`(?x)
(?<=})|
((?!
  \\G(('[^']*?')|("[^"]*?"))|
  \\s*{|
  \\s*/\\*|\\s*//
)(?=\\s*\\S))`,patterns:[{include:"#comments"},{include:"#function_body"},{begin:"\\G",end:"(?<=(=>))",name:"meta.function.arrow.json.js",patterns:[{captures:{1:{name:"string.quoted.single.js"},2:{name:"punctuation.definition.string.begin.js"},3:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.end.js"},5:{name:"string.quoted.double.js"},6:{name:"punctuation.definition.string.begin.js"},7:{name:"entity.name.function.js"},8:{name:"punctuation.definition.string.end.js"},9:{name:"keyword.operator.assignment.js"}},match:`(?:((')([^']*?)('))|((")([^"]*?)(")))\\s*(:)`},{include:"#arrow_function_innards"}]}]},{captures:{0:{name:"meta.function.arrow.js"},1:{name:"storage.type.function.arrow.js"}},match:"(=>)"},{captures:{1:{name:"storage.type.class.js"},2:{name:"storage.modifier.js"},3:{name:"entity.other.inherited-class.js"},4:{name:"entity.name.type.class.js"},5:{name:"storage.modifier.js"},6:{name:"entity.other.inherited-class.js"}},match:`(?x)
\\b(class)
(?:
  (?:\\s+(extends)\\s+([a-zA-Z_$][\\w$]*))
  |
  (?:
    (?:\\s+([a-zA-Z_$][\\w$]*))
    (?:\\s+(extends)\\s+([a-zA-Z_$][\\w$]*))?
  )
)`,name:"meta.class.js"},{captures:{1:{name:"keyword.operator.new.js"},2:{name:"entity.name.type.instance.js",patterns:[{match:"\\.",name:"meta.delimiter.property.period.js"}]}},match:"(new)\\s+([\\w$]+[\\w.$]*)",name:"meta.class.instance.constructor.js"},{begin:"(?<![\\w$])console(?![\\w$]|\\s*:)",beginCaptures:{0:{name:"entity.name.type.object.console.js"}},end:`(?x)
(?<=\\)) | (?=
  (?! (\\s*//)|(\\s*/\\*)|(\\s*(\\.)\\s*
    (assert|clear|debug|error|info|log|profile|profileEnd|time|timeEnd|warn)
    \\s*\\(
  )) \\s*\\S
)`,patterns:[{include:"#comments"},{begin:"\\s*(\\.)\\s*(\\w+)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"support.function.console.js"}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]}]},{begin:"(?<![\\w$])Math(?![\\w$]|\\s*:)",beginCaptures:{0:{name:"support.class.math.js"}},end:`(?x)
(?<=E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2|\\)
) | (?=
  (?! (\\s*//)|(\\s*/\\*)|(\\s*\\.\\s* (
    ((abs|acos|acosh|asin|asinh|atan|atan2|atanh|cbrt|ceil|clz32|cos|cosh|exp|
    expm1|floor|fround|hypot|imul|log|log10|log1p|log2|max|min|pow|random|
    round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\s*\\(
    ) | (E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2)(?!\\s*[\\w$(]))
  )) \\s*\\S
)`,patterns:[{include:"#comments"},{begin:"\\s*(\\.)\\s*(\\w+)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"support.function.math.js"}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"support.constant.property.math.js"}},match:"\\s*(\\.)\\s*(\\w+)\\b"}]},{begin:"(?<![\\w$])Promise(?![\\w$]|\\s*:)",beginCaptures:{0:{name:"support.class.promise.js"}},end:`(?x)
(?<=\\)) | (?=
  (?! (\\s*//)|(\\s*/\\*)|(\\s*\\.\\s*(all|race|reject|resolve)\\s*\\() )\\s*\\S
)`,patterns:[{include:"#comments"},{begin:"\\s*(\\.)\\s*(\\w+)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{name:"support.function.promise.js"}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]}]},{include:"#strings"},{include:"#comments"},{captures:{0:{name:"punctuation.definition.comment.html.js"},2:{name:"punctuation.definition.comment.html.js"}},match:"(<!--|-->)",name:"comment.block.html.js"},{match:"(?<!\\.)\\b(class|enum|function|interface)(?!\\s*:)\\b",name:"storage.type.js"},{match:"(?<!\\.)\\b(async|export|extends|implements|private|protected|public|static)(?!\\s*:)\\b",name:"storage.modifier.js"},{match:"(?<!\\.)\\b(let|var)(?!\\s*:)\\b",name:"storage.type.var.js"},{begin:"(?<!\\.)\\b(const)(?!\\s*:)\\b",beginCaptures:{1:{name:"storage.type.const.js"}},end:"(\\bof\\b|\\bin\\b)|(;)|(=)|(?<![,{])\\n",endCaptures:{1:{name:"keyword.operator.$1.js"},2:{name:"punctuation.terminator.statement.js"},3:{name:"keyword.operator.assignment.js"}},patterns:[{captures:{2:{name:"keyword.operator.assignment.js"},3:{name:"constant.other.js"}},match:"([$_a-zA-Z][$_a-zA-Z0-9]*)\\s*(:)\\s*([$_a-zA-Z][$_a-zA-Z0-9]*)?"},{captures:{1:{name:"constant.other.js"}},match:"([$_a-zA-Z][$_a-zA-Z0-9]*)"},{match:"\\.\\.\\.",name:"keyword.operator.spread.js"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\(|\\)",name:"meta.brace.round.js"},{match:"{|}",name:"meta.brace.curly.js"},{match:"\\[|\\]",name:"meta.brace.square.js"},{include:"#comments"}]},{captures:{1:{name:"keyword.control.js"},2:{name:"storage.modifier.js"}},match:"(?<!\\.)\\b(yield)(?!\\s*:)\\b(?:\\s*(\\*))?",name:"meta.control.yield.js"},{match:"(?:(?<=\\.{3})|(?<!\\.))\\b(await)(?!\\s*:)\\b",name:"keyword.control.js"},{match:"(?<!\\.)\\b(break|catch|continue|do|else|finally|for|if|import|package|return|throw|try|while|with)(?!\\s*:)\\b",name:"keyword.control.js"},{include:"#switch_statement"},{match:"(?<!\\.)\\b(delete|in|of|instanceof|new|typeof|void)(?!\\s*:)\\b",name:"keyword.operator.$1.js"},{match:"\\.\\.\\.",name:"keyword.operator.spread.js"},{match:"(?<!\\.)\\b(true|false)(?!\\s*:)\\b",name:"constant.language.boolean.$1.js"},{match:"(?<!\\.)\\b(null)(?!\\s*:)\\b",name:"constant.language.null.js"},{match:"(?<!\\.)\\b(debugger)(?!\\s*:)\\b",name:"keyword.other.debugger.js"},{match:`(?x) (?<!\\$) \\b
(AggregateError|Array|ArrayBuffer|Atomics|Boolean|DataView|Date|Error|EvalError|Float32Array|Float64Array
|Function|Generator|GeneratorFunction|Int16Array|Int32Array|Int8Array|InternalError|Intl|JSON|Map|Number
|Object|Proxy|RangeError|ReferenceError|Reflect|RegExp|Set|SharedArrayBuffer|SIMD|String|Symbol|SyntaxError
|TypeError|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|URIError|WeakMap|WeakSet)
\\b`,name:"support.class.js"},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"support.variable.property.js"},3:{name:"support.constant.js"}},match:`(?x) (\\.) \\s* (?:
  (constructor|length|prototype) |
  (EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)
)\\b`},{captures:{1:{name:"support.variable.dom.js"},2:{name:"support.class.dom.js"}},match:`(?x) (?<!\\$) \\b (?:
  (document|event|navigator|performance|screen|window|self|frames)
  |
  (AnalyserNode|ArrayBufferView|Attr|AudioBuffer|AudioBufferSourceNode|AudioContext|AudioDestinationNode|AudioListener
  |AudioNode|AudioParam|BatteryManager|BeforeUnloadEvent|BiquadFilterNode|Blob|BufferSource|ByteString|CSS|CSSConditionRule
  |CSSCounterStyleRule|CSSGroupingRule|CSSMatrix|CSSMediaRule|CSSPageRule|CSSPrimitiveValue|CSSRule|CSSRuleList|CSSStyleDeclaration
  |CSSStyleRule|CSSStyleSheet|CSSSupportsRule|CSSValue|CSSValueList|CanvasGradient|CanvasImageSource|CanvasPattern
  |CanvasRenderingContext2D|ChannelMergerNode|ChannelSplitterNode|CharacterData|ChromeWorker|CloseEvent|Comment|CompositionEvent
  |Console|ConvolverNode|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|CustomEvent|DOMError|DOMException
  |DOMHighResTimeStamp|DOMImplementation|DOMString|DOMStringList|DOMStringMap|DOMTimeStamp|DOMTokenList|DataTransfer
  |DataTransferItem|DataTransferItemList|DedicatedWorkerGlobalScope|DelayNode|DeviceProximityEvent|DirectoryEntry
  |DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|Document|DocumentFragment|DocumentTouch|DocumentType|DragEvent
  |DynamicsCompressorNode|Element|Entry|EntrySync|ErrorEvent|Event|EventListener|EventSource|EventTarget|FederatedCredential
  |FetchEvent|File|FileEntry|FileEntrySync|FileException|FileList|FileReader|FileReaderSync|FileSystem|FileSystemSync
  |FontFace|FormData|GainNode|Gamepad|GamepadButton|GamepadEvent|Geolocation|GlobalEventHandlers|HTMLAnchorElement
  |HTMLAreaElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLCanvasElement
  |HTMLCollection|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDialogElement|HTMLDivElement
  |HTMLDocument|HTMLElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormControlsCollection|HTMLFormElement
  |HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement
  |HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMediaElement
  |HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement
  |HTMLOptionsCollection|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement
  |HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement
  |HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement
  |HTMLTableRowElement|HTMLTableSectionElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement
  |HTMLUListElement|HTMLUnknownElement|HTMLVideoElement|HashChangeEvent|History|IDBCursor|IDBCursorWithValue|IDBDatabase
  |IDBEnvironment|IDBFactory|IDBIndex|IDBKeyRange|IDBMutableFile|IDBObjectStore|IDBOpenDBRequest|IDBRequest|IDBTransaction
  |IDBVersionChangeEvent|IIRFilterNode|IdentityManager|ImageBitmap|ImageBitmapFactories|ImageData|Index|InputDeviceCapabilities
  |InputEvent|InstallEvent|InstallTrigger|KeyboardEvent|LinkStyle|LocalFileSystem|LocalFileSystemSync|Location|MIDIAccess
  |MIDIConnectionEvent|MIDIInput|MIDIInputMap|MIDIOutputMap|MediaElementAudioSourceNode|MediaError|MediaKeyMessageEvent
  |MediaKeySession|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeySystemConfiguration|MediaKeys|MediaRecorder|MediaStream
  |MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessageChannel|MessageEvent|MessagePort|MouseEvent
  |MutationObserver|MutationRecord|NamedNodeMap|Navigator|NavigatorConcurrentHardware|NavigatorGeolocation|NavigatorID
  |NavigatorLanguage|NavigatorOnLine|Node|NodeFilter|NodeIterator|NodeList|NonDocumentTypeChildNode|Notification
  |OfflineAudioCompletionEvent|OfflineAudioContext|OscillatorNode|PageTransitionEvent|PannerNode|ParentNode|PasswordCredential
  |Path2D|PaymentAddress|PaymentRequest|PaymentResponse|Performance|PerformanceEntry|PerformanceFrameTiming|PerformanceMark
  |PerformanceMeasure|PerformanceNavigation|PerformanceNavigationTiming|PerformanceObserver|PerformanceObserverEntryList
  |PerformanceResourceTiming|PerformanceTiming|PeriodicSyncEvent|PeriodicWave|Plugin|Point|PointerEvent|PopStateEvent
  |PortCollection|Position|PositionError|PositionOptions|PresentationConnectionClosedEvent|PresentationConnectionList
  |PresentationReceiver|ProcessingInstruction|ProgressEvent|PromiseRejectionEvent|PushEvent|PushRegistrationManager
  |RTCCertificate|RTCConfiguration|RTCPeerConnection|RTCSessionDescriptionCallback|RTCStatsReport|RadioNodeList|RandomSource
  |Range|ReadableByteStream|RenderingContext|SVGAElement|SVGAngle|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement
  |SVGAnimateTransformElement|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength
  |SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPoints|SVGAnimatedPreserveAspectRatio
  |SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGAnimationElement|SVGCircleElement|SVGClipPathElement
  |SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGEvent|SVGFilterElement|SVGFontElement
  |SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement
  |SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGradientElement|SVGHKernElement|SVGImageElement|SVGLength
  |SVGLengthList|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMaskElement|SVGMatrix|SVGMissingGlyphElement
  |SVGNumber|SVGNumberList|SVGPathElement|SVGPatternElement|SVGPoint|SVGPolygonElement|SVGPolylineElement|SVGPreserveAspectRatio
  |SVGRadialGradientElement|SVGRect|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStringList
  |SVGStylable|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTests|SVGTextElement
  |SVGTextPositioningElement|SVGTitleElement|SVGTransform|SVGTransformList|SVGTransformable|SVGUseElement|SVGVKernElement
  |SVGViewElement|ServiceWorker|ServiceWorkerContainer|ServiceWorkerGlobalScope|ServiceWorkerRegistration|ServiceWorkerState
  |ShadowRoot|SharedWorker|SharedWorkerGlobalScope|SourceBufferList|StereoPannerNode|Storage|StorageEvent|StyleSheet
  |StyleSheetList|SubtleCrypto|SyncEvent|Text|TextMetrics|TimeEvent|TimeRanges|Touch|TouchEvent|TouchList|Transferable
  |TreeWalker|UIEvent|USVString|VRDisplayCapabilities|ValidityState|WaveShaperNode|WebGL|WebGLActiveInfo|WebGLBuffer
  |WebGLContextEvent|WebGLFramebuffer|WebGLProgram|WebGLRenderbuffer|WebGLRenderingContext|WebGLShader|WebGLShaderPrecisionFormat
  |WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES
  |WebSocket|WebSockets|WebVTT|WheelEvent|Window|WindowBase64|WindowEventHandlers|WindowTimers|Worker|WorkerGlobalScope
  |WorkerLocation|WorkerNavigator|XMLHttpRequest|XMLHttpRequestEventTarget|XMLSerializer|XPathExpression|XPathResult
  |XSLTProcessor)
)\\b`},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"support.constant.dom.js"},3:{name:"support.variable.property.dom.js"}},match:`(?x) (\\.) \\s*
(?:
  (ATTRIBUTE_NODE|CDATA_SECTION_NODE|COMMENT_NODE|DOCUMENT_FRAGMENT_NODE|DOCUMENT_NODE|DOCUMENT_TYPE_NODE
  |DOMSTRING_SIZE_ERR|ELEMENT_NODE|ENTITY_NODE|ENTITY_REFERENCE_NODE|HIERARCHY_REQUEST_ERR|INDEX_SIZE_ERR
  |INUSE_ATTRIBUTE_ERR|INVALID_CHARACTER_ERR|NO_DATA_ALLOWED_ERR|NO_MODIFICATION_ALLOWED_ERR|NOT_FOUND_ERR
  |NOT_SUPPORTED_ERR|NOTATION_NODE|PROCESSING_INSTRUCTION_NODE|TEXT_NODE|WRONG_DOCUMENT_ERR)
  |
  (_content|[xyz]|abbr|above|accept|acceptCharset|accessKey|action|align|[av]Link(?:color)?|all|alt|anchors|appCodeName
  |appCore|applets|appMinorVersion|appName|appVersion|archive|areas|arguments|attributes|availHeight|availLeft|availTop
  |availWidth|axis|background|backgroundColor|backgroundImage|below|bgColor|body|border|borderBottomWidth|borderColor
  |borderLeftWidth|borderRightWidth|borderStyle|borderTopWidth|borderWidth|bottom|bufferDepth|callee|caller|caption
  |cellPadding|cells|cellSpacing|ch|characterSet|charset|checked|childNodes|chOff|cite|classes|className|clear
  |clientInformation|clip|clipBoardData|closed|code|codeBase|codeType|color|colorDepth|cols|colSpan|compact|complete
  |components|content|controllers|cookie|cookieEnabled|cords|cpuClass|crypto|current|data|dateTime|declare|defaultCharset
  |defaultChecked|defaultSelected|defaultStatus|defaultValue|defaultView|defer|description|dialogArguments|dialogHeight
  |dialogLeft|dialogTop|dialogWidth|dir|directories|disabled|display|docmain|doctype|documentElement|elements|embeds
  |enabledPlugin|encoding|enctype|entities|event|expando|external|face|fgColor|filename|firstChild|fontFamily|fontSize
  |fontWeight|form|formName|forms|frame|frameBorder|frameElement|frames|hasFocus|hash|headers|height|history|host
  |hostname|href|hreflang|hspace|htmlFor|httpEquiv|id|ids|ignoreCase|images|implementation|index|innerHeight|innerWidth
  |input|isMap|label|lang|language|lastChild|lastIndex|lastMatch|lastModified|lastParen|layer[sXY]|left|leftContext
  |lineHeight|link|linkColor|links|listStyleType|localName|location|locationbar|longDesc|lowsrc|lowSrc|marginBottom
  |marginHeight|marginLeft|marginRight|marginTop|marginWidth|maxLength|media|menubar|method|mimeTypes|multiline|multiple
  |name|nameProp|namespaces|namespaceURI|next|nextSibling|nodeName|nodeType|nodeValue|noHref|noResize|noShade|notationName
  |notations|noWrap|object|offscreenBuffering|onLine|onreadystatechange|opener|opsProfile|options|oscpu|outerHeight
  |outerWidth|ownerDocument|paddingBottom|paddingLeft|paddingRight|paddingTop|page[XY]|page[XY]Offset|parent|parentLayer
  |parentNode|parentWindow|pathname|personalbar|pixelDepth|pkcs11|platform|plugins|port|prefix|previous|previousDibling
  |product|productSub|profile|profileend|prompt|prompter|protocol|publicId|readOnly|readyState|referrer|rel|responseText
  |responseXML|rev|right|rightContext|rowIndex|rows|rowSpan|rules|scheme|scope|screen[XY]|screenLeft|screenTop|scripts
  |scrollbars|scrolling|sectionRowIndex|security|securityPolicy|selected|selectedIndex|selection|self|shape|siblingAbove
  |siblingBelow|size|source|specified|standby|start|status|statusbar|statusText|style|styleSheets|suffixes|summary
  |systemId|systemLanguage|tagName|tags|target|tBodies|text|textAlign|textDecoration|textIndent|textTransform|tFoot|tHead
  |title|toolbar|top|type|undefined|uniqueID|updateInterval|URL|URLUnencoded|useMap|userAgent|userLanguage|userProfile
  |vAlign|value|valueType|vendor|vendorSub|version|visibility|vspace|whiteSpace|width|X[MS]LDocument|zIndex)
)
\\b`},{match:"(?<!\\.)\\b(module|exports|__filename|__dirname|global|globalThis|process)(?!\\s*:)\\b",name:"support.variable.js"},{match:"\\b(Infinity|NaN|undefined)\\b",name:"constant.language.js"},{begin:"(?<=[\\[{=(?:+*,!~-]|^|return|=>|&&|\\|\\|)\\s*(/)(?![/*+?])(?=.*/)",beginCaptures:{1:{name:"punctuation.definition.string.begin.js"}},end:"(/)([gimsuy]*)",endCaptures:{1:{name:"punctuation.definition.string.end.js"},2:{name:"meta.flag.regexp"}},name:"string.regexp.js",patterns:[{include:"source.js.regexp"}]},{begin:"\\?",beginCaptures:{0:{name:"keyword.operator.ternary.js"}},end:":",endCaptures:{0:{name:"keyword.operator.ternary.js"}},patterns:[{include:"#prevent_object_keys_matching"},{include:"$self"}]},{include:"#operators"},{include:"#method_calls"},{include:"#function_calls"},{include:"#numbers"},{include:"#objects"},{include:"#properties"},{match:"((?<!\\.|[\\w$])(?![_\\$]+[^A-Z0-9_$])\\$*\\b(?:[A-Z_$][A-Z0-9_$]*)\\b\\$*)",name:"constant.other.js"},{match:"(?<!\\$)\\b[0-9]+[\\w$]*",name:"invalid.illegal.identifier.js"},{match:"\\;",name:"punctuation.terminator.statement.js"},{match:",",name:"meta.delimiter.object.comma.js"},{match:"\\.",name:"meta.delimiter.method.period.js"},{captures:{1:{name:"punctuation.section.scope.begin.js"},2:{name:"punctuation.section.scope.end.js"}},match:"({)(})"},{begin:"{",beginCaptures:{0:{name:"meta.brace.curly.js"}},end:"}",endCaptures:{0:{name:"meta.brace.curly.js"}},patterns:[{include:"$self"}]},{begin:"\\(",beginCaptures:{0:{name:"meta.brace.round.js"}},end:"\\)",endCaptures:{0:{name:"meta.brace.round.js"}},patterns:[{include:"$self"}]},{match:"\\[|\\]",name:"meta.brace.square.js"},{match:"\\A#!.*$",name:"comment.line.shebang.js"}],repository:{arguments:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.bracket.round.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.bracket.round.js"}},name:"meta.arguments.js",patterns:[{include:"$self"}]}]},arrow_function_innards:{patterns:[{match:"=>",name:"storage.type.function.arrow.js"},{include:"#function_params"},{captures:{0:{name:"meta.parameters.js"},1:{name:"variable.parameter.function.js"}},match:"([a-zA-Z_$][\\w$]*)(?=\\s*=>)"},{captures:{0:{name:"meta.parameters.js"},1:{name:"invalid.illegal.identifier.js"}},match:"(\\d[\\w$]*)"}]},comments:{patterns:[{captures:{1:{name:"punctuation.definition.comment.begin.js"},2:{name:"punctuation.definition.comment.end.js"}},match:"(/\\*)(\\*/)",name:"comment.block.empty.js"},{begin:"/\\*\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.documentation.js",patterns:[{include:"source.jsdoc"}]},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.js"},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"$",name:"comment.line.double-slash.js"}]},function_body:{patterns:[{begin:"{",beginCaptures:{0:{name:"punctuation.definition.function.body.begin.bracket.curly.js"}},end:"}",endCaptures:{0:{name:"punctuation.definition.function.body.end.bracket.curly.js"}},patterns:[{include:"$self"}]}]},function_calls:{patterns:[{begin:"([\\w$]+)\\s*(?=\\()",beginCaptures:{1:{patterns:[{match:`(?x)
\\b(isNaN|isFinite|eval|uneval|parseInt|parseFloat|decodeURI|
decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|
require|set(Interval|Timeout)|clear(Interval|Timeout))\\b`,name:"support.function.js"},{match:"[a-zA-Z_$][\\w$]*",name:"entity.name.function.js"},{match:"\\d[\\w$]*",name:"invalid.illegal.identifier.js"}]}},end:"(?<=\\))",name:"meta.function-call.js",patterns:[{include:"#arguments"}]}]},function_innards:{patterns:[{captures:{1:{name:"storage.modifier.async.js"},2:{name:"storage.type.function.js"},3:{name:"storage.modifier.generator.js"}},match:"(?:\\b(async)\\b\\s*)?\\b(function)\\b(?:\\s*(\\*))?"},{match:"[a-zA-Z_$][\\w$]*(?=\\s*\\()",name:"entity.name.function.js"},{include:"#function_params"},{include:"#comments"}]},function_params:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.bracket.round.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.bracket.round.js"}},name:"meta.parameters.js",patterns:[{captures:{1:{name:"keyword.operator.spread.js"},2:{name:"variable.parameter.rest.function.js"}},match:"(\\.\\.\\.)([a-zA-Z_$][\\w$]*)"},{include:"$self"},{match:"[a-zA-Z_$][\\w$]*",name:"variable.parameter.function.js"}]}]},interpolated_js:{patterns:[{begin:"\\${",captures:{0:{name:"punctuation.section.embedded.js"}},end:"}",name:"source.js.embedded.source",patterns:[{begin:"{",beginCaptures:{0:{name:"meta.brace.curly.js"}},end:"}",endCaptures:{0:{name:"meta.brace.curly.js"}},patterns:[{include:"$self"}]},{include:"$self"}]}]},method_calls:{patterns:[{begin:"(\\.)\\s*([\\w$]+)\\s*(?=\\()",beginCaptures:{1:{name:"meta.delimiter.method.period.js"},2:{patterns:[{match:`(?x)
\\bon(Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|
Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|
Before(cut|deactivate|unload|update|paste|print|editfocus|activate)|
Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|
Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|
Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|
Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|
Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\\b`,name:"support.function.event-handler.js"},{match:`(?x)
\\b(catch|finally|then|shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|
scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|
sup|sub|substr|substring|splice|split|send|set(Milliseconds|Seconds|Minutes|Hours|
Month|Year|FullYear|Date|UTC(Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|
Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|
savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|
contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|
createEventObject|to(GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|
test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|
untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|stringify|
print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|
fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|
forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|
abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|
releaseCapture|releaseEvents|go|get(Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|
Time|Date|TimezoneOffset|UTC(Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|
Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|
moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back)\\b`,name:"support.function.js"},{match:`(?x)
\\b(acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|
appendChild|appendData|before|blur|canPlayType|captureStream|
caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|
cloneContents|cloneNode|cloneRange|close|closest|collapse|
compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|
convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|
createAttributeNS|createCaption|createCDATASection|createComment|
createContextualFragment|createDocument|createDocumentFragment|
createDocumentType|createElement|createElementNS|createEntityReference|
createEvent|createExpression|createHTMLDocument|createNodeIterator|
createNSResolver|createProcessingInstruction|createRange|createShadowRoot|
createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|
deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|
deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|
enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|
exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|
getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|
getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|
getClientRects|getContext|getDestinationInsertionPoints|getElementById|
getElementsByClassName|getElementsByName|getElementsByTagName|
getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|
getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|
hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|
insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|
insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|
isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|
lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|
moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|
parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|
previousSibling|probablySupportsContext|queryCommandEnabled|
queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|
querySelector|querySelectorAll|registerContentHandler|registerElement|
registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|
removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|
removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|
requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|
scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|
setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|
setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|
setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|
slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|
submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|
toDataURL|toggle|toString|values|write|writeln)\\b`,name:"support.function.dom.js"},{match:"[a-zA-Z_$][\\w$]*",name:"entity.name.function.js"},{match:"\\d[\\w$]*",name:"invalid.illegal.identifier.js"}]}},end:"(?<=\\))",name:"meta.method-call.js",patterns:[{include:"#arguments"}]}]},numbers:{patterns:[{captures:{0:{patterns:[{include:"#numeric_separators"}]}},match:"\\b(?<!\\$)0(x|X)[0-9a-fA-F]+(?:_[0-9a-fA-F]+)*n?\\b(?!\\$)",name:"constant.numeric.hex.js"},{captures:{0:{patterns:[{include:"#numeric_separators"}]}},match:"\\b(?<!\\$)0(b|B)[01]+(?:_[01]+)*n?\\b(?!\\$)",name:"constant.numeric.binary.js"},{captures:{0:{patterns:[{include:"#numeric_separators"}]}},match:"\\b(?<!\\$)0(o|O)?[0-7]+(?:_[0-7]+)*n?\\b(?!\\$)",name:"constant.numeric.octal.js"},{captures:{0:{patterns:[{include:"#numeric_separators"}]}},match:`(?x)
(?<!\\$)(?:
  (?:\\b[0-9]+(?:_[0-9]+)*\\.[0-9]+(?:_[0-9]+)*[eE][+-]?[0-9]+(?:_[0-9]+)*\\b)|   # 1.1E+3
  (?:\\b[0-9]+(?:_[0-9]+)*\\.[eE][+-]?[0-9]+(?:_[0-9]+)*\\b)|                     # 1.E+3
  (?:\\B\\.[0-9]+(?:_[0-9]+)*[eE][+-]?[0-9]+(?:_[0-9]+)*\\b)|                     # .1E+3
  (?:\\b[0-9]+(?:_[0-9]+)*[eE][+-]?[0-9]+(?:_[0-9]+)*\\b)|                        # 1E+3
  (?:\\b[0-9]+(?:_[0-9]+)*\\.[0-9]+(?:_[0-9]+)*\\b)|                              # 1.1
  (?:\\b[0-9]+(?:_[0-9]+)*\\.\\B)|                                                # 1.
  (?:\\B\\.[0-9]+(?:_[0-9]+)*\\b)|                                                # .1
  (?:\\b[0-9]+(?:_[0-9]+)*n?\\b(?!\\.))                                           # 1n
)(?!\\$)`,name:"constant.numeric.decimal.js"}]},numeric_separators:{patterns:[{captures:{1:{name:"meta.delimiter.numeric.separator.js"},2:{name:"meta.delimiter.decimal.period.js"}},match:"(_)|(\\.)"}]},objects:{patterns:[{match:"[A-Z][A-Z0-9_$]*(?=\\s*\\.\\s*[a-zA-Z_$]\\w*)",name:"constant.other.object.js"},{match:"[a-zA-Z_$][\\w$]*(?=\\s*\\.\\s*[a-zA-Z_$]\\w*)",name:"variable.other.object.js"}]},operators:{patterns:[{match:"%=|\\+=|-=|\\*=|(?<!\\()/=",name:"keyword.operator.assignment.compound.js"},{match:"&=|\\^=|<<=|>>=|>>>=|\\|=",name:"keyword.operator.assignment.compound.bitwise.js"},{match:"<<|>>>|>>",name:"keyword.operator.bitwise.shift.js"},{match:"!==|!=|<=|>=|===|==|<|>",name:"keyword.operator.comparison.js"},{match:"&&|!!|!|\\|\\|",name:"keyword.operator.logical.js"},{match:"&|\\||\\^|~",name:"keyword.operator.bitwise.js"},{match:"=|:",name:"keyword.operator.assignment.js"},{match:"--",name:"keyword.operator.decrement.js"},{match:"\\+\\+",name:"keyword.operator.increment.js"},{match:"%|\\*|/|-|\\+",name:"keyword.operator.js"}]},prevent_object_keys_matching:{patterns:[{captures:{1:{patterns:[{include:"$self"}]}},match:"(\\w+)(?=\\s*:)"}]},properties:{patterns:[{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"constant.other.object.property.js"}},match:"(\\.)\\s*([A-Z][A-Z0-9_$]*\\b\\$*)(?=\\s*\\.\\s*[a-zA-Z_$]\\w*)"},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"variable.other.object.property.js"}},match:"(\\.)\\s*(\\$*[a-zA-Z_$][\\w$]*)(?=\\s*\\.\\s*[a-zA-Z_$]\\w*)"},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"constant.other.property.js"}},match:"(\\.)\\s*([A-Z][A-Z0-9_$]*\\b\\$*)"},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"variable.other.property.js"}},match:"(\\.)\\s*(\\$*[a-zA-Z_$][\\w$]*)"},{captures:{1:{name:"meta.delimiter.property.period.js"},2:{name:"invalid.illegal.identifier.js"}},match:"(\\.)\\s*([0-9][\\w$]*)"}]},string_escapes:{patterns:[{match:`\\\\u(?![A-Fa-f0-9]{4}|{[A-Fa-f0-9]+})[^'"]*`,name:"invalid.illegal.unicode-escape.js"},{captures:{1:{name:"punctuation.definition.unicode-escape.begin.bracket.curly.js"},2:{patterns:[{match:"[A-Fa-f\\d]{7,}|(?!10)[A-Fa-f\\d]{6}",name:"invalid.illegal.unicode-escape.js"}]},3:{name:"punctuation.definition.unicode-escape.end.bracket.curly.js"}},match:"\\\\u(?:[A-Fa-f0-9]{4}|({)([A-Fa-f0-9]+)(}))",name:"constant.character.escape.js"},{match:"\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.js"}]},strings:{patterns:[{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.single.js",patterns:[{include:"#string_escapes"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.double.js",patterns:[{include:"#string_escapes"}]},{begin:"((\\w+)?(html|HTML|Html))\\s*(`)",beginCaptures:{1:{name:"entity.name.function.js"},4:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.html.js",patterns:[{include:"#string_escapes"},{include:"#interpolated_js"},{include:"text.html.basic"}]},{begin:"(?<=innerHTML)\\s*(\\+?=)\\s*(?=`)",beginCaptures:{1:{name:"keyword.operator.assignment.js"}},contentName:"string.quoted.template.html.js",end:"(?<=`)",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},patterns:[{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},patterns:[{include:"#string_escapes"},{include:"#interpolated_js"},{include:"text.html.basic"}]}]},{begin:"(Relay\\.QL|gql)\\s*(`)",beginCaptures:{1:{name:"entity.name.function.js"},2:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.graphql.js",patterns:[{include:"#string_escapes"},{include:"#interpolated_js"},{include:"source.graphql"}]},{begin:"(sql|SQL|Sql)\\s*(`)",beginCaptures:{1:{name:"entity.name.function.js"},2:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.sql.js",patterns:[{include:"#string_escapes"},{include:"#interpolated_js"},{include:"source.sql"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.js"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.js"}},name:"string.quoted.template.js",patterns:[{include:"#string_escapes"},{include:"#interpolated_js"}]}]},switch_statement:{patterns:[{begin:"\\bswitch\\b",beginCaptures:{0:{name:"keyword.control.switch.js"}},end:"}",endCaptures:{0:{name:"punctuation.definition.section.switch-block.end.bracket.curly.js"}},name:"meta.switch-statement.js",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.switch-expression.begin.bracket.round.js"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.switch-expression.end.bracket.round.js"}},patterns:[{include:"$self"}]},{begin:"{",beginCaptures:{0:{name:"punctuation.definition.section.switch-block.begin.bracket.curly.js"}},end:"(?=})",patterns:[{begin:"\\bcase\\b",beginCaptures:{0:{name:"keyword.control.case.js"}},end:":",endCaptures:{0:{name:"punctuation.definition.section.case-statement.js"}},patterns:[{include:"#prevent_object_keys_matching"},{include:"$self"}]},{captures:{1:{name:"keyword.control.default.js"},2:{name:"punctuation.definition.section.case-statement.js"}},match:"(?:^\\s*)?\\b(default)\\b\\s*(:)"},{include:"$self"}]}]}]}},scopeName:"source.js"},l=a,i={extensions:[".pl",".al",".cgi",".fcgi",".perl",".ph",".plx",".pm",".psgi",".t"],names:["perl","cperl"],patterns:[{include:"#line_comment"},{begin:"^(?==[a-zA-Z]+)",end:"^(=cut\\b.*$)",endCaptures:{1:{patterns:[{include:"#pod"}]}},name:"comment.block.documentation.perl",patterns:[{include:"#pod"}]},{include:"#variable"},{applyEndPatternLast:!0,begin:"\\b(?=qr\\s*[^\\s\\w])",end:"((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",endCaptures:{1:{name:"string.regexp.compile.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{begin:"(qr)\\s*\\{",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\}",name:"string.regexp.compile.nested_braces.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_braces_interpolated"}]},{begin:"(qr)\\s*\\[",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\]",name:"string.regexp.compile.nested_brackets.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_brackets_interpolated"}]},{begin:"(qr)\\s*<",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:">",name:"string.regexp.compile.nested_ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_ltgt_interpolated"}]},{begin:"(qr)\\s*\\(",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\)",name:"string.regexp.compile.nested_parens.perl",patterns:[{match:"\\$(?=[^\\s\\w\\\\'\\{\\[\\(\\<])"},{include:"#escaped_char"},{include:"#variable"},{include:"#nested_parens_interpolated"}]},{begin:"(qr)\\s*'",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"'",name:"string.regexp.compile.single-quote.perl",patterns:[{include:"#escaped_char"}]},{begin:"(qr)\\s*([^\\s\\w'\\{\\[\\(\\<])",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\2",name:"string.regexp.compile.simple-delimiter.perl",patterns:[{match:"\\$(?=[^\\s\\w'\\{\\[\\(\\<])",name:"keyword.control.anchor.perl"},{include:"#escaped_char"},{include:"#variable"},{include:"#nested_parens_interpolated"}]}]},{applyEndPatternLast:!0,begin:"(?<!\\{|\\+|\\-)\\b(?=m\\s*[^\\sa-zA-Z0-9])",end:"((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",endCaptures:{1:{name:"string.regexp.find-m.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{begin:"(m)\\s*\\{",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\}",name:"string.regexp.find-m.nested_braces.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_braces_interpolated"}]},{begin:"(m)\\s*\\[",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\]",name:"string.regexp.find-m.nested_brackets.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_brackets_interpolated"}]},{begin:"(m)\\s*<",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:">",name:"string.regexp.find-m.nested_ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_ltgt_interpolated"}]},{begin:"(m)\\s*\\(",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\)",name:"string.regexp.find-m.nested_parens.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_parens_interpolated"}]},{begin:"(m)\\s*'",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"'",name:"string.regexp.find-m.single-quote.perl",patterns:[{include:"#escaped_char"}]},{begin:"\\G(?<!\\{|\\+|\\-)(m)(?!_)\\s*([^\\sa-zA-Z0-9'\\{\\[\\(\\<])",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\2",name:"string.regexp.find-m.simple-delimiter.perl",patterns:[{match:"\\$(?=[^\\sa-zA-Z0-9'\\{\\[\\(\\<])",name:"keyword.control.anchor.perl"},{include:"#escaped_char"},{include:"#variable"},{begin:"\\[",beginCaptures:{1:{name:"punctuation.definition.character-class.begin.perl"}},end:"\\]",endCaptures:{1:{name:"punctuation.definition.character-class.end.perl"}},name:"constant.other.character-class.set.perl",patterns:[{match:"\\$(?=[^\\s\\w'\\{\\[\\(\\<])",name:"keyword.control.anchor.perl"},{include:"#escaped_char"}]},{include:"#nested_parens_interpolated"}]}]},{applyEndPatternLast:!0,begin:"\\b(?=(?<!\\&)(s)(\\s+\\S|\\s*[;\\,\\{\\}\\(\\)\\[<]|$))",end:"((([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\{\\}\\)\\]>]|\\s*$))",endCaptures:{1:{name:"string.regexp.replace.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{begin:"(s)\\s*\\{",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\}",name:"string.regexp.nested_braces.perl",patterns:[{include:"#escaped_char"},{include:"#nested_braces"}]},{begin:"(s)\\s*\\[",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\]",name:"string.regexp.nested_brackets.perl",patterns:[{include:"#escaped_char"},{include:"#nested_brackets"}]},{begin:"(s)\\s*<",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:">",name:"string.regexp.nested_ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#nested_ltgt"}]},{begin:"(s)\\s*\\(",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"\\)",name:"string.regexp.nested_parens.perl",patterns:[{include:"#escaped_char"},{include:"#nested_parens"}]},{begin:"\\{",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\}",name:"string.regexp.format.nested_braces.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_braces_interpolated"}]},{begin:"\\[",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\]",name:"string.regexp.format.nested_brackets.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_brackets_interpolated"}]},{begin:"<",captures:{0:{name:"punctuation.definition.string.perl"}},end:">",name:"string.regexp.format.nested_ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_ltgt_interpolated"}]},{begin:"\\(",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\)",name:"string.regexp.format.nested_parens.perl",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_parens_interpolated"}]},{begin:"'",captures:{0:{name:"punctuation.definition.string.perl"}},end:"'",name:"string.regexp.format.single_quote.perl",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.perl"}]},{begin:"([^\\s\\w\\[({<;])",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\1",name:"string.regexp.format.simple_delimiter.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]},{match:"\\s+"}]},{begin:"\\b(?=s([^\\sa-zA-Z0-9\\[({<]).*\\1([egimosxradlupcn]*)([\\}\\)\\;\\,]|\\s+))",end:"((([egimosxradlupcn]*)))(?=([\\}\\)\\;\\,]|\\s+|\\s*$))",endCaptures:{1:{name:"string.regexp.replace.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{begin:"(s\\s*)([^\\sa-zA-Z0-9\\[({<])",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"(?=\\2)",name:"string.regexp.replaceXXX.simple_delimiter.perl",patterns:[{include:"#escaped_char"}]},{begin:"'",captures:{0:{name:"punctuation.definition.string.perl"}},end:"'",name:"string.regexp.replaceXXX.format.single_quote.perl",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.perl.perl"}]},{begin:"([^\\sa-zA-Z0-9\\[({<])",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\1",name:"string.regexp.replaceXXX.format.simple_delimiter.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]}]},{begin:"\\b(?=(?<!\\\\)s\\s*([^\\s\\w\\[({<>]))",end:"((([egimosradlupc]*x[egimosradlupc]*)))\\b",endCaptures:{1:{name:"string.regexp.replace.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{begin:"(s)\\s*(.)",captures:{0:{name:"punctuation.definition.string.perl"},1:{name:"support.function.perl"}},end:"(?=\\2)",name:"string.regexp.replace.extended.simple_delimiter.perl",patterns:[{include:"#escaped_char"}]},{begin:"'",captures:{0:{name:"punctuation.definition.string.perl"}},end:"'(?=[egimosradlupc]*x[egimosradlupc]*)\\b",name:"string.regexp.replace.extended.simple_delimiter.perl",patterns:[{include:"#escaped_char"}]},{begin:"(.)",captures:{0:{name:"punctuation.definition.string.perl"}},end:"\\1(?=[egimosradlupc]*x[egimosradlupc]*)\\b",name:"string.regexp.replace.extended.simple_delimiter.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]}]},{begin:"(?<=\\(|\\{|~|&|\\||if|unless|^)\\s*((\\/))",beginCaptures:{1:{name:"string.regexp.find.perl"},2:{name:"punctuation.definition.string.perl"}},contentName:"string.regexp.find.perl",end:"((\\1([egimosxradlupcn]*)))(?=(\\s+\\S|\\s*[;\\,\\#\\{\\}\\)]|\\s*$))",endCaptures:{1:{name:"string.regexp.find.perl"},2:{name:"punctuation.definition.string.perl"},3:{name:"keyword.control.regexp-option.perl"}},patterns:[{match:"\\$(?=\\/)",name:"keyword.control.anchor.perl"},{include:"#escaped_char"},{include:"#variable"}]},{captures:{1:{name:"constant.other.key.perl"}},match:"\\b(\\w+)\\s*(?==>)"},{match:"(?<={)\\s*\\w+\\s*(?=})",name:"constant.other.bareword.perl"},{captures:{1:{name:"keyword.control.perl"},2:{name:"entity.name.type.class.perl"}},match:"^\\s*(package)\\s+([^\\s;]+)",name:"meta.class.perl"},{captures:{1:{name:"storage.type.sub.perl"},2:{name:"entity.name.function.perl"},3:{name:"storage.type.method.perl"}},match:"\\b(sub)(?:\\s+([-a-zA-Z0-9_]+))?\\s*(?:\\([\\$\\@\\*;]*\\))?[^\\w\\{]",name:"meta.function.perl"},{captures:{1:{name:"entity.name.function.perl"},2:{name:"punctuation.definition.parameters.perl"},3:{name:"variable.parameter.function.perl"}},match:"^\\s*(BEGIN|UNITCHECK|CHECK|INIT|END|DESTROY)\\b",name:"meta.function.perl"},{begin:"^(?=(\\t| {4}))",end:"(?=[^\\t\\s])",name:"meta.leading-tabs",patterns:[{captures:{1:{name:"meta.odd-tab"},2:{name:"meta.even-tab"}},match:"(\\t| {4})(\\t| {4})?"}]},{captures:{1:{name:"support.function.perl"},2:{name:"punctuation.definition.string.perl"},5:{name:"punctuation.definition.string.perl"},8:{name:"punctuation.definition.string.perl"}},match:"\\b(tr|y)\\s*([^A-Za-z0-9\\s])(.*?)(?<!\\\\)(\\\\{2})*(\\2)(.*?)(?<!\\\\)(\\\\{2})*(\\2)",name:"string.regexp.replace.perl"},{match:"\\b(__FILE__|__LINE__|__PACKAGE__|__SUB__)\\b",name:"constant.language.perl"},{begin:"\\b(__DATA__|__END__)\\n?",beginCaptures:{1:{name:"constant.language.perl"}},contentName:"comment.block.documentation.perl",end:"\\z",patterns:[{include:"#pod"}]},{match:"(?<!->)\\b(continue|default|die|do|else|elsif|exit|for|foreach|given|goto|if|last|next|redo|return|select|unless|until|wait|when|while|switch|case|require|use|eval)\\b",name:"keyword.control.perl"},{match:"\\b(my|our|local)\\b",name:"storage.modifier.perl"},{match:"(?<!\\w)\\-[rwxoRWXOezsfdlpSbctugkTBMAC]\\b",name:"keyword.operator.filetest.perl"},{match:"\\b(and|or|xor|as|not)\\b",name:"keyword.operator.logical.perl"},{match:"(<=>|=>|->)",name:"keyword.operator.comparison.perl"},{include:"#heredoc"},{begin:"\\bqq\\s*([^\\(\\{\\[\\<\\w\\s])",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.qq.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"\\bqx\\s*([^'\\(\\{\\[\\<\\w\\s])",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"\\bqx\\s*'",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx.single-quote.perl",patterns:[{include:"#escaped_char"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.double.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"(?<!->)\\bqw?\\s*([^\\(\\{\\[\\<\\w\\s])",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.q.perl"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.single.perl",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.perl"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.perl",patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"(?<!->)\\bqq\\s*\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.qq-paren.perl",patterns:[{include:"#escaped_char"},{include:"#nested_parens_interpolated"},{include:"#variable"}]},{begin:"\\bqq\\s*\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.qq-brace.perl",patterns:[{include:"#escaped_char"},{include:"#nested_braces_interpolated"},{include:"#variable"}]},{begin:"\\bqq\\s*\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.qq-bracket.perl",patterns:[{include:"#escaped_char"},{include:"#nested_brackets_interpolated"},{include:"#variable"}]},{begin:"\\bqq\\s*\\<",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.qq-ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#nested_ltgt_interpolated"},{include:"#variable"}]},{begin:"(?<!->)\\bqx\\s*\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx-paren.perl",patterns:[{include:"#escaped_char"},{include:"#nested_parens_interpolated"},{include:"#variable"}]},{begin:"\\bqx\\s*\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx-brace.perl",patterns:[{include:"#escaped_char"},{include:"#nested_braces_interpolated"},{include:"#variable"}]},{begin:"\\bqx\\s*\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx-bracket.perl",patterns:[{include:"#escaped_char"},{include:"#nested_brackets_interpolated"},{include:"#variable"}]},{begin:"\\bqx\\s*\\<",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.interpolated.qx-ltgt.perl",patterns:[{include:"#escaped_char"},{include:"#nested_ltgt_interpolated"},{include:"#variable"}]},{begin:"(?<!->)\\bqw?\\s*\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.q-paren.perl",patterns:[{include:"#nested_parens"}]},{begin:"\\bqw?\\s*\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.q-brace.perl",patterns:[{include:"#nested_braces"}]},{begin:"\\bqw?\\s*\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.q-bracket.perl",patterns:[{include:"#nested_brackets"}]},{begin:"\\bqw?\\s*\\<",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"\\>",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.quoted.other.q-ltgt.perl",patterns:[{include:"#nested_ltgt"}]},{begin:"^__\\w+__",beginCaptures:{0:{name:"punctuation.definition.string.begin.perl"}},end:"$",endCaptures:{0:{name:"punctuation.definition.string.end.perl"}},name:"string.unquoted.program-block.perl"},{begin:"\\b(format)\\s+(\\w+)\\s*=",beginCaptures:{1:{name:"support.function.perl"},2:{name:"entity.name.function.format.perl"}},end:"^\\.\\s*$",name:"meta.format.perl",patterns:[{include:"#line_comment"},{include:"#variable"}]},{captures:{1:{name:"support.function.perl"},2:{name:"entity.name.function.perl"}},match:"\\b(x)\\s*(\\d+)\\b"},{match:"\\b(ARGV|DATA|ENV|SIG|STDERR|STDIN|STDOUT|atan2|bind|binmode|bless|caller|chdir|chmod|chomp|chop|chown|chr|chroot|close|closedir|cmp|connect|cos|crypt|dbmclose|dbmopen|defined|delete|dump|each|endgrent|endhostent|endnetent|endprotoent|endpwent|endservent|eof|eq|eval|exec|exists|exp|fcntl|fileno|flock|fork|formline|ge|getc|getgrent|getgrgid|getgrnam|gethostbyaddr|gethostbyname|gethostent|getlogin|getnetbyaddr|getnetbyname|getnetent|getpeername|getpgrp|getppid|getpriority|getprotobyname|getprotobynumber|getprotoent|getpwent|getpwnam|getpwuid|getservbyname|getservbyport|getservent|getsockname|getsockopt|glob|gmtime|grep|gt|hex|import|index|int|ioctl|join|keys|kill|lc|lcfirst|le|length|link|listen|local|localtime|log|lstat|lt|m|map|mkdir|msgctl|msgget|msgrcv|msgsnd|ne|no|oct|open|opendir|ord|pack|pipe|pop|pos|print|printf|push|quotemeta|rand|read|readdir|readlink|recv|ref|rename|reset|reverse|rewinddir|rindex|rmdir|s|say|scalar|seek|seekdir|semctl|semget|semop|send|setgrent|sethostent|setnetent|setpgrp|setpriority|setprotoent|setpwent|setservent|setsockopt|shift|shmctl|shmget|shmread|shmwrite|shutdown|sin|sleep|socket|socketpair|sort|splice|split|sprintf|sqrt|srand|stat|study|substr|symlink|syscall|sysopen|sysread|system|syswrite|tell|telldir|tie|tied|time|times|tr|truncate|uc|ucfirst|umask|undef|unlink|unpack|unshift|untie|utime|values|vec|waitpid|wantarray|warn|write|y)\\b",name:"support.function.perl"},{captures:{1:{name:"punctuation.section.scope.begin.perl"},2:{name:"punctuation.section.scope.end.perl"}},match:"(\\{)(\\})"},{captures:{1:{name:"punctuation.section.scope.begin.perl"},2:{name:"punctuation.section.scope.end.perl"}},match:"(\\()(\\))"}],repository:{escaped_char:{patterns:[{match:"\\\\\\d+",name:"constant.character.escape.perl"},{match:"\\\\c[^\\s\\\\]",name:"constant.character.escape.perl"},{match:"\\\\g(?:\\{(?:\\w*|-\\d+)\\}|\\d+)",name:"constant.character.escape.perl"},{match:"\\\\k(?:\\{\\w*\\}|<\\w*>|'\\w*')",name:"constant.character.escape.perl"},{match:"\\\\N\\{[^\\}]*\\}",name:"constant.character.escape.perl"},{match:"\\\\o\\{\\d*\\}",name:"constant.character.escape.perl"},{match:"\\\\(?:p|P)(?:\\{\\w*\\}|P)",name:"constant.character.escape.perl"},{match:"\\\\x(?:[0-9a-zA-Z]{2}|\\{\\w*\\})?",name:"constant.character.escape.perl"},{match:"\\\\.",name:"constant.character.escape.perl"}]},heredoc:{patterns:[{begin:"((((<<(~)?) *')(HTML)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.html",patterns:[{begin:"^",end:"\\n",name:"text.html.basic",patterns:[{include:"text.html.basic"}]}]},{begin:"((((<<(~)?) *')(XML)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.xml",patterns:[{begin:"^",end:"\\n",name:"text.xml",patterns:[{include:"text.xml"}]}]},{begin:"((((<<(~)?) *')(CSS)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.css",patterns:[{begin:"^",end:"\\n",name:"source.css",patterns:[{include:"source.css"}]}]},{begin:"((((<<(~)?) *')(JAVASCRIPT)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.js",patterns:[{begin:"^",end:"\\n",name:"source.js",patterns:[{include:"source.js"}]}]},{begin:"((((<<(~)?) *')(SQL)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.sql",patterns:[{begin:"^",end:"\\n",name:"source.sql",patterns:[{include:"source.sql"}]}]},{begin:"((((<<(~)?) *')(POSTSCRIPT)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.postscript",patterns:[{begin:"^",end:"\\n",name:"source.postscript",patterns:[{include:"source.postscript"}]}]},{begin:"((((<<(~)?) *')([^']*)(')))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}}},{begin:"((((<<(~)?) *\\\\)((?![=\\d\\$\\( ])[^;,'\"`\\s\\)]*)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.raw.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.raw.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.raw.perl"},3:{name:"punctuation.definition.string.end.perl"}}},{begin:'((((<<(~)?) *")(HTML)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.html",patterns:[{begin:"^",end:"\\n",name:"text.html.basic",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"text.html.basic"}]}]},{begin:'((((<<(~)?) *")(XML)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.xml",patterns:[{begin:"^",end:"\\n",name:"text.xml",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"text.xml"}]}]},{begin:'((((<<(~)?) *")(CSS)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.css",patterns:[{begin:"^",end:"\\n",name:"source.css",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.css"}]}]},{begin:'((((<<(~)?) *")(JAVASCRIPT)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.js",patterns:[{begin:"^",end:"\\n",name:"source.js",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.js"}]}]},{begin:'((((<<(~)?) *")(SQL)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.sql",patterns:[{begin:"^",end:"\\n",name:"source.sql",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.sql"}]}]},{begin:'((((<<(~)?) *")(POSTSCRIPT)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.postscript",patterns:[{begin:"^",end:"\\n",name:"source.postscript",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.postscript"}]}]},{begin:'((((<<(~)?) *")([^"]*)(")))(.*)\\n?',beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"((((<<(~)?) *)(HTML)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.html",patterns:[{begin:"^",end:"\\n",name:"text.html.basic",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"text.html.basic"}]}]},{begin:"((((<<(~)?) *)(XML)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.xml",patterns:[{begin:"^",end:"\\n",name:"text.xml",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"text.xml"}]}]},{begin:"((((<<(~)?) *)(CSS)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.css",patterns:[{begin:"^",end:"\\n",name:"source.css",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.css"}]}]},{begin:"((((<<(~)?) *)(JAVASCRIPT)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.js",patterns:[{begin:"^",end:"\\n",name:"source.js",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.js"}]}]},{begin:"((((<<(~)?) *)(SQL)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.sql",patterns:[{begin:"^",end:"\\n",name:"source.sql",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.sql"}]}]},{begin:"((((<<(~)?) *)(POSTSCRIPT)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},name:"meta.embedded.block.postscript",patterns:[{begin:"^",end:"\\n",name:"source.postscript",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"source.postscript"}]}]},{begin:"((((<<(~)?) *)((?![=\\d\\$\\( ])[^;,'\"`\\s\\)]*)()))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.interpolated.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},patterns:[{include:"#escaped_char"},{include:"#variable"}]},{begin:"((((<<(~)?) *`)([^`]*)(`)))(.*)\\n?",beginCaptures:{1:{name:"string.unquoted.heredoc.interpolated.perl"},2:{name:"punctuation.definition.string.begin.perl"},3:{name:"punctuation.definition.delimiter.begin.perl"},7:{name:"punctuation.definition.delimiter.end.perl"},8:{patterns:[{include:"$self"}]}},contentName:"string.unquoted.heredoc.shell.perl",end:"^((?!\\5)\\s+)?((\\6))$",endCaptures:{2:{name:"string.unquoted.heredoc.interpolated.perl"},3:{name:"punctuation.definition.string.end.perl"}},patterns:[{include:"#escaped_char"},{include:"#variable"}]}]},line_comment:{patterns:[{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.perl"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.perl"}},end:"\\n",name:"comment.line.number-sign.perl"}]}]},nested_braces:{begin:"\\{",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\}",patterns:[{include:"#escaped_char"},{include:"#nested_braces"}]},nested_braces_interpolated:{begin:"\\{",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\}",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_braces_interpolated"}]},nested_brackets:{begin:"\\[",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\]",patterns:[{include:"#escaped_char"},{include:"#nested_brackets"}]},nested_brackets_interpolated:{begin:"\\[",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\]",patterns:[{include:"#escaped_char"},{include:"#variable"},{include:"#nested_brackets_interpolated"}]},nested_ltgt:{begin:"<",captures:{1:{name:"punctuation.section.scope.perl"}},end:">",patterns:[{include:"#nested_ltgt"}]},nested_ltgt_interpolated:{begin:"<",captures:{1:{name:"punctuation.section.scope.perl"}},end:">",patterns:[{include:"#variable"},{include:"#nested_ltgt_interpolated"}]},nested_parens:{begin:"\\(",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\)",patterns:[{include:"#escaped_char"},{include:"#nested_parens"}]},nested_parens_interpolated:{begin:"\\(",captures:{1:{name:"punctuation.section.scope.perl"}},end:"\\)",patterns:[{match:"\\$(?=[^\\s\\w'\\{\\[\\(\\<])",name:"keyword.control.anchor.perl"},{include:"#escaped_char"},{include:"#variable"},{include:"#nested_parens_interpolated"}]},pod:{patterns:[{match:"^=(pod|back|cut)\\b",name:"storage.type.class.pod.perl"},{begin:"^(=begin)\\s+(html)\\s*$",beginCaptures:{1:{name:"storage.type.class.pod.perl"},2:{name:"variable.other.pod.perl"}},contentName:"text.embedded.html.basic",end:"^(=end)\\s+(html)|^(?==cut)",endCaptures:{1:{name:"storage.type.class.pod.perl"},2:{name:"variable.other.pod.perl"}},name:"meta.embedded.pod.perl",patterns:[{include:"text.html.basic"}]},{captures:{1:{name:"storage.type.class.pod.perl"},2:{name:"variable.other.pod.perl",patterns:[{include:"#pod-formatting"}]}},match:"^(=(?:head[1-4]|item|over|encoding|begin|end|for))\\b\\s*(.*)"},{include:"#pod-formatting"}]},"pod-formatting":{patterns:[{captures:{1:{name:"markup.italic.pod.perl"},2:{name:"markup.italic.pod.perl"}},match:"I(?:<([^<>]+)>|<+(\\s+(?:(?<!\\s)>|[^>])+\\s+)>+)",name:"entity.name.type.instance.pod.perl"},{captures:{1:{name:"markup.bold.pod.perl"},2:{name:"markup.bold.pod.perl"}},match:"B(?:<([^<>]+)>|<+(\\s+(?:(?<!\\s)>|[^>])+\\s+)>+)",name:"entity.name.type.instance.pod.perl"},{captures:{1:{name:"markup.raw.pod.perl"},2:{name:"markup.raw.pod.perl"}},match:"C(?:<([^<>]+)>|<+(\\\\s+(?:(?<!\\\\s)>|[^>])+\\\\s+)>+)",name:"entity.name.type.instance.pod.perl"},{captures:{1:{name:"markup.underline.link.hyperlink.pod.perl"}},match:"L<([^>]+)>",name:"entity.name.type.instance.pod.perl"},{match:"[EFSXZ]<[^>]*>",name:"entity.name.type.instance.pod.perl"}]},variable:{patterns:[{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)&(?![A-Za-z0-9_])",name:"variable.other.regexp.match.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)`(?![A-Za-z0-9_])",name:"variable.other.regexp.pre-match.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)'(?![A-Za-z0-9_])",name:"variable.other.regexp.post-match.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)\\+(?![A-Za-z0-9_])",name:"variable.other.regexp.last-paren-match.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:'(\\$)"(?![A-Za-z0-9_])',name:"variable.other.readwrite.list-separator.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)0(?![A-Za-z0-9_])",name:"variable.other.predefined.program-name.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)[_ab\\*\\.\\/\\|,\\\\;#%=\\-~^:?!\\$<>\\(\\)\\[\\]@](?![A-Za-z0-9_])",name:"variable.other.predefined.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"(\\$)[0-9]+(?![A-Za-z0-9_])",name:"variable.other.subpattern.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"([\\$\\@\\%](#)?)([a-zA-Zx7f-xff\\$]|::)([a-zA-Z0-9_x7f-xff\\$]|::)*\\b",name:"variable.other.readwrite.global.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"},2:{name:"punctuation.definition.variable.perl"}},match:"(\\$\\{)(?:[a-zA-Zx7f-xff\\$]|::)(?:[a-zA-Z0-9_x7f-xff\\$]|::)*(\\})",name:"variable.other.readwrite.global.perl"},{captures:{1:{name:"punctuation.definition.variable.perl"}},match:"([\\$\\@\\%](#)?)[0-9_]\\b",name:"variable.other.readwrite.global.special.perl"}]}},scopeName:"source.perl"},d=i,r={extensions:[".bzl",".cgi",".eb",".fcgi",".gyp",".gypi",".lmi",".py",".py3",".pyde",".pyi",".pyp",".pyt",".pyw",".rpy",".sage",".sagews",".smk",".spec",".star",".tac",".wsgi",".xpy",".xsh"],names:["bazel","bzl","easybuild","python","python3","rusthon","sage","starlark","xonsh"],patterns:[{include:"#statement"},{include:"#expression"}],repository:{"annotated-parameter":{begin:`(?x)
  \\b
  ([[:alpha:]_]\\w*) \\s* (:)
`,beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.annotation.python"}},end:"(,)|(?=\\))",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"},{match:"=(?!=)",name:"keyword.operator.assignment.python"}]},"assignment-operator":{match:`(?x)
     <<= | >>= | //= | \\*\\*=
    | \\+= | -= | /= | @=
    | \\*= | %= | ~= | \\^= | &= | \\|=
    | =(?!=)
`,name:"keyword.operator.assignment.python"},backticks:{begin:"\\`",end:"(?:\\`|(?<!\\\\)(\\n))",name:"invalid.deprecated.backtick.python",patterns:[{include:"#expression"}]},"builtin-callables":{patterns:[{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#builtin-exceptions"},{include:"#builtin-functions"},{include:"#builtin-types"}]},"builtin-exceptions":{match:`(?x) (?<!\\.) \\b(
  (
    Arithmetic | Assertion | Attribute | Buffer | BlockingIO
    | BrokenPipe | ChildProcess
    | (Connection (Aborted | Refused | Reset)?)
    | EOF | Environment | FileExists | FileNotFound
    | FloatingPoint | IO | Import | Indentation | Index | Interrupted
    | IsADirectory | NotADirectory | Permission | ProcessLookup
    | Timeout
    | Key | Lookup | Memory | Name | NotImplemented | OS | Overflow
    | Reference | Runtime | Recursion | Syntax | System
    | Tab | Type | UnboundLocal | Unicode(Encode|Decode|Translate)?
    | Value | Windows | ZeroDivision | ModuleNotFound
  ) Error
|
  ((Pending)?Deprecation | Runtime | Syntax | User | Future | Import
    | Unicode | Bytes | Resource
  )? Warning
|
  SystemExit | Stop(Async)?Iteration
  | KeyboardInterrupt
  | GeneratorExit | (Base)?Exception
)\\b
`,name:"support.type.exception.python"},"builtin-functions":{patterns:[{match:`(?x)
  (?<!\\.) \\b(
    __import__ | abs | aiter | all | any | anext | ascii | bin
    | breakpoint | callable | chr | compile | copyright | credits
    | delattr | dir | divmod | enumerate | eval | exec | exit
    | filter | format | getattr | globals | hasattr | hash | help
    | hex | id | input | isinstance | issubclass | iter | len
    | license | locals | map | max | memoryview | min | next
    | oct | open | ord | pow | print | quit | range | reload | repr
    | reversed | round | setattr | sorted | sum | vars | zip
  )\\b
`,name:"support.function.builtin.python"},{match:`(?x)
  (?<!\\.) \\b(
    file | reduce | intern | raw_input | unicode | cmp | basestring
    | execfile | long | xrange
  )\\b
`,name:"variable.legacy.builtin.python"}]},"builtin-possible-callables":{patterns:[{include:"#builtin-callables"},{include:"#magic-names"}]},"builtin-types":{match:`(?x)
  (?<!\\.) \\b(
    bool | bytearray | bytes | classmethod | complex | dict
    | float | frozenset | int | list | object | property
    | set | slice | staticmethod | str | tuple | type

    (?# Although 'super' is not a type, it's related to types,
        and is special enough to be highlighted differently from
        other built-ins)
    | super
  )\\b
`,name:"support.type.python"},"call-wrapper-inheritance":{begin:`(?x)
  \\b(?=
    ([[:alpha:]_]\\w*) \\s* (\\()
  )
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.function-call.python",patterns:[{include:"#inheritance-name"},{include:"#function-arguments"}]},"class-declaration":{patterns:[{begin:`(?x)
  \\s*(class)\\s+
    (?=
      [[:alpha:]_]\\w* \\s* (:|\\()
    )
`,beginCaptures:{1:{name:"storage.type.class.python"}},end:"(:)",endCaptures:{1:{name:"punctuation.section.class.begin.python"}},name:"meta.class.python",patterns:[{include:"#class-name"},{include:"#class-inheritance"}]}]},"class-inheritance":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.inheritance.begin.python"}},end:"(\\))",endCaptures:{1:{name:"punctuation.definition.inheritance.end.python"}},name:"meta.class.inheritance.python",patterns:[{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.arguments.python"},{match:",",name:"punctuation.separator.inheritance.python"},{match:"=(?!=)",name:"keyword.operator.assignment.python"},{match:"\\bmetaclass\\b",name:"support.type.metaclass.python"},{include:"#illegal-names"},{include:"#class-kwarg"},{include:"#call-wrapper-inheritance"},{include:"#expression-base"},{include:"#member-access-class"},{include:"#inheritance-identifier"}]},"class-kwarg":{captures:{1:{name:"entity.other.inherited-class.python variable.parameter.class.python"},2:{name:"keyword.operator.assignment.python"}},match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\s*(=)(?!=)
`},"class-name":{patterns:[{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,name:"entity.name.type.class.python"}]},codetags:{captures:{1:{name:"keyword.codetag.notation.python"}},match:"(?:\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b)"},comments:{patterns:[{begin:`(?x)
  (?:
    \\# \\s* (type:)
    \\s*+ (?# we want \`\\s*+\` which is possessive quantifier since
             we do not actually want to backtrack when matching
             whitespace here)
    (?! $ | \\#)
  )
`,beginCaptures:{0:{name:"meta.typehint.comment.python"},1:{name:"comment.typehint.directive.notation.python"}},contentName:"meta.typehint.comment.python",end:"(?:$|(?=\\#))",name:"comment.line.number-sign.python",patterns:[{match:`(?x)
  \\G ignore
  (?= \\s* (?: $ | \\#))
`,name:"comment.typehint.ignore.notation.python"},{match:`(?x)
  (?<!\\.)\\b(
    bool | bytes | float | int | object | str
    | List | Dict | Iterable | Sequence | Set
    | FrozenSet | Callable | Union | Tuple
    | Any | None
  )\\b
`,name:"comment.typehint.type.notation.python"},{match:"([\\[\\]\\(\\),\\.\\=\\*]|(->))",name:"comment.typehint.punctuation.notation.python"},{match:"([[:alpha:]_]\\w*)",name:"comment.typehint.variable.notation.python"}]},{include:"#comments-base"}]},"comments-base":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($)",name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"comments-string-double-three":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:'($|(?="""))',name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"comments-string-single-three":{begin:"(\\#)",beginCaptures:{1:{name:"punctuation.definition.comment.python"}},end:"($|(?='''))",name:"comment.line.number-sign.python",patterns:[{include:"#codetags"}]},"curly-braces":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dict.begin.python"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dict.end.python"}},patterns:[{match:":",name:"punctuation.separator.dict.python"},{include:"#expression"}]},decorator:{begin:`(?x)
  ^\\s*
  ((@)) \\s* (?=[[:alpha:]_]\\w*)
`,beginCaptures:{1:{name:"entity.name.function.decorator.python"},2:{name:"punctuation.definition.decorator.python"}},end:`(?x)
  ( \\) )
    # trailing whitespace and comments are legal
    (?: (.*?) (?=\\s*(?:\\#|$)) )
  | (?=\\n|\\#)
`,endCaptures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"invalid.illegal.decorator.python"}},name:"meta.function.decorator.python",patterns:[{include:"#decorator-name"},{include:"#function-arguments"}]},"decorator-name":{patterns:[{include:"#builtin-callables"},{include:"#illegal-object-name"},{captures:{2:{name:"punctuation.separator.period.python"}},match:`(?x)
  ([[:alpha:]_]\\w*) | (\\.)
`,name:"entity.name.function.decorator.python"},{include:"#line-continuation"},{captures:{1:{name:"invalid.illegal.decorator.python"}},match:`(?x)
  \\s* ([^([:alpha:]\\s_\\.#\\\\] .*?) (?=\\#|$)
`,name:"invalid.illegal.decorator.python"}]},docstring:{patterns:[{begin:`(\\'\\'\\'|\\"\\"\\")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.python"}},name:"string.quoted.docstring.multi.python",patterns:[{include:"#docstring-prompt"},{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{begin:`([rR])(\\'\\'\\'|\\"\\"\\")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"}},name:"string.quoted.docstring.raw.multi.python",patterns:[{include:"#string-consume-escape"},{include:"#docstring-prompt"},{include:"#codetags"}]},{begin:`(\\'|\\")`,beginCaptures:{1:{name:"punctuation.definition.string.begin.python"}},end:"(\\1)|(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.docstring.single.python",patterns:[{include:"#codetags"},{include:"#docstring-guts-unicode"}]},{begin:`([rR])(\\'|\\")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.docstring.raw.single.python",patterns:[{include:"#string-consume-escape"},{include:"#codetags"}]}]},"docstring-guts-unicode":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"docstring-prompt":{captures:{1:{name:"keyword.control.flow.python"}},match:`(?x)
  (?:
    (?:^|\\G) \\s* (?# '\\G' is necessary for ST)
    ((?:>>>|\\.\\.\\.) \\s) (?=\\s*\\S)
  )
`},"docstring-statement":{begin:`^(?=\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,end:`((?<=\\1)|^)(?!\\s*[rR]?(\\'\\'\\'|\\"\\"\\"|\\'|\\"))`,patterns:[{include:"#docstring"}]},"double-one-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:'(\\]|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"double-one-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"double-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-one-regexp-character-set"},{include:"#double-one-regexp-comments"},{include:"#regexp-flags"},{include:"#double-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-one-regexp-lookahead"},{include:"#double-one-regexp-lookahead-negative"},{include:"#double-one-regexp-lookbehind"},{include:"#double-one-regexp-lookbehind-negative"},{include:"#double-one-regexp-conditional"},{include:"#double-one-regexp-parentheses-non-capturing"},{include:"#double-one-regexp-parentheses"}]},"double-one-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-named-group":{begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="))|((?=(?<!\\\\)\\n))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-one-regexp-expression"}]},"double-three-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:'(\\]|(?="""))',endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"double-three-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"double-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#double-three-regexp-character-set"},{include:"#double-three-regexp-comments"},{include:"#regexp-flags"},{include:"#double-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#double-three-regexp-lookahead"},{include:"#double-three-regexp-lookahead-negative"},{include:"#double-three-regexp-lookbehind"},{include:"#double-three-regexp-lookbehind-negative"},{include:"#double-three-regexp-conditional"},{include:"#double-three-regexp-parentheses-non-capturing"},{include:"#double-three-regexp-parentheses"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-named-group":{begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},"double-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:'(\\)|(?="""))',endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#double-three-regexp-expression"},{include:"#comments-string-double-three"}]},ellipsis:{match:"\\.\\.\\.",name:"constant.other.ellipsis.python"},"escape-sequence":{match:`(?x)
  \\\\ (
        x[0-9A-Fa-f]{2}
        | [0-7]{1,3}
        | [\\\\"'abfnrtv]
     )
`,name:"constant.character.escape.python"},"escape-sequence-unicode":{patterns:[{match:`(?x)
  \\\\ (
        u[0-9A-Fa-f]{4}
        | U[0-9A-Fa-f]{8}
        | N\\{[\\w\\s]+?\\}
     )
`,name:"constant.character.escape.python"}]},expression:{patterns:[{include:"#expression-base"},{include:"#member-access"},{match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"expression-bare":{patterns:[{include:"#backticks"},{include:"#illegal-anno"},{include:"#literal"},{include:"#regexp"},{include:"#string"},{include:"#lambda"},{include:"#generator"},{include:"#illegal-operator"},{include:"#operator"},{include:"#curly-braces"},{include:"#item-access"},{include:"#list"},{include:"#odd-function-call"},{include:"#round-braces"},{include:"#function-call"},{include:"#builtin-functions"},{include:"#builtin-types"},{include:"#builtin-exceptions"},{include:"#magic-names"},{include:"#special-names"},{include:"#illegal-names"},{include:"#special-variables"},{include:"#ellipsis"},{include:"#punctuation"},{include:"#line-continuation"}]},"expression-base":{patterns:[{include:"#comments"},{include:"#expression-bare"},{include:"#line-continuation"}]},"f-expression":{patterns:[{include:"#expression-bare"},{include:"#member-access"},{match:"(?x) \\b ([[:alpha:]_]\\w*) \\b"}]},"fregexp-base-expression":{patterns:[{include:"#fregexp-quantifier"},{include:"#fstring-formatting-braces"},{match:"\\{.*?\\}"},{include:"#regexp-base-common"}]},"fregexp-quantifier":{match:`(?x)
  \\{\\{(
    \\d+ | \\d+,(\\d+)? | ,\\d+
  )\\}\\}
`,name:"keyword.operator.quantifier.regexp"},"fstring-fnorm-quoted-multi-line":{begin:`(\\b[fF])([bBuU])?('''|""")`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.multi.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-fnorm-quoted-single-line":{begin:`(\\b[fF])([bBuU])?((['"]))`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},2:{name:"invalid.illegal.prefix.python"},3:{name:"punctuation.definition.string.begin.python string.interpolated.python string.quoted.single.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-formatting":{patterns:[{include:"#fstring-formatting-braces"},{include:"#fstring-formatting-singe-brace"}]},"fstring-formatting-braces":{patterns:[{captures:{1:{name:"constant.character.format.placeholder.other.python"},2:{name:"invalid.illegal.brace.python"},3:{name:"constant.character.format.placeholder.other.python"}},match:"({)(\\s*?)(})"},{match:"({{|}})",name:"constant.character.escape.python"}]},"fstring-formatting-singe-brace":{match:"(}(?!}))",name:"invalid.illegal.brace.python"},"fstring-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#fstring-formatting"}]},"fstring-illegal-multi-brace":{patterns:[{include:"#impossible"}]},"fstring-illegal-single-brace":{begin:"(\\{)(?=[^\\n}]*$\\n?)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},end:"(\\})|(?=\\n)",endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-multi-brace":{begin:"(\\{)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},end:`(?x)
  (\\})
`,endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-multi"},{include:"#f-expression"}]},"fstring-multi-core":{match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|'''|""")
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`,name:"string.interpolated.python string.quoted.multi.python"},"fstring-normf-quoted-multi-line":{begin:`(\\b[bBuU])([fF])('''|""")`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.multi.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.multi.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-multi-core"}]},"fstring-normf-quoted-single-line":{begin:`(\\b[bBuU])([fF])((['"]))`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"string.interpolated.python string.quoted.single.python storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python string.quoted.single.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-single-core"}]},"fstring-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#fstring-formatting"}]},"fstring-raw-multi-core":{match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|'''|""")
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`,name:"string.interpolated.python string.quoted.raw.multi.python"},"fstring-raw-quoted-multi-line":{begin:`(\\b(?:[rR][fF]|[fF][rR]))('''|""")`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.multi.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.multi.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.multi.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{include:"#fstring-raw-multi-core"}]},"fstring-raw-quoted-single-line":{begin:`(\\b(?:[rR][fF]|[fF][rR]))((['"]))`,beginCaptures:{1:{name:"string.interpolated.python string.quoted.raw.single.python storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python string.quoted.raw.single.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.single.python"},2:{name:"invalid.illegal.newline.python"}},name:"meta.fstring.python",patterns:[{include:"#fstring-raw-guts"},{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{include:"#fstring-raw-single-core"}]},"fstring-raw-single-core":{match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`,name:"string.interpolated.python string.quoted.raw.single.python"},"fstring-single-brace":{begin:"(\\{)",beginCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},end:`(?x)
  (\\})|(?=\\n)
`,endCaptures:{1:{name:"constant.character.format.placeholder.other.python"}},patterns:[{include:"#fstring-terminator-single"},{include:"#f-expression"}]},"fstring-single-core":{match:`(?x)
  (.+?)
    (
      (?# .* and .*? in multi-line match need special handling of
        newlines otherwise SublimeText and Atom will match slightly
        differently.

        The guard for newlines has to be separate from the
        lookahead because of special $ matching rule.)
      ($\\n?)
      |
      (?=[\\\\\\}\\{]|(['"])|((?<!\\\\)\\n))
    )
  (?# due to how multiline regexps are matched we need a special case
    for matching a newline character)
  | \\n
`,name:"string.interpolated.python string.quoted.single.python"},"fstring-terminator-multi":{patterns:[{match:"(=(![rsa])?)(?=})",name:"storage.type.format.python"},{match:"(=?![rsa])(?=})",name:"storage.type.format.python"},{captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},match:`(?x)
  ( (?: =?) (?: ![rsa])? )
    ( : \\w? [<>=^]? [-+ ]? \\#?
      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`},{include:"#fstring-terminator-multi-tail"}]},"fstring-terminator-multi-tail":{begin:"((?:=?)(?:![rsa])?)(:)(?=.*?{)",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},end:"(?=})",patterns:[{include:"#fstring-illegal-multi-brace"},{include:"#fstring-multi-brace"},{match:"([bcdeEfFgGnosxX%])(?=})",name:"storage.type.format.python"},{match:"(\\.\\d+)",name:"storage.type.format.python"},{match:"(,)",name:"storage.type.format.python"},{match:"(\\d+)",name:"storage.type.format.python"},{match:"(\\#)",name:"storage.type.format.python"},{match:"([-+ ])",name:"storage.type.format.python"},{match:"([<>=^])",name:"storage.type.format.python"},{match:"(\\w)",name:"storage.type.format.python"}]},"fstring-terminator-single":{patterns:[{match:"(=(![rsa])?)(?=})",name:"storage.type.format.python"},{match:"(=?![rsa])(?=})",name:"storage.type.format.python"},{captures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},match:`(?x)
  ( (?: =?) (?: ![rsa])? )
    ( : \\w? [<>=^]? [-+ ]? \\#?
      \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )(?=})
`},{include:"#fstring-terminator-single-tail"}]},"fstring-terminator-single-tail":{begin:"((?:=?)(?:![rsa])?)(:)(?=.*?{)",beginCaptures:{1:{name:"storage.type.format.python"},2:{name:"storage.type.format.python"}},end:"(?=})|(?=\\n)",patterns:[{include:"#fstring-illegal-single-brace"},{include:"#fstring-single-brace"},{match:"([bcdeEfFgGnosxX%])(?=})",name:"storage.type.format.python"},{match:"(\\.\\d+)",name:"storage.type.format.python"},{match:"(,)",name:"storage.type.format.python"},{match:"(\\d+)",name:"storage.type.format.python"},{match:"(\\#)",name:"storage.type.format.python"},{match:"([-+ ])",name:"storage.type.format.python"},{match:"([<>=^])",name:"storage.type.format.python"},{match:"(\\w)",name:"storage.type.format.python"}]},"function-arguments":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.function-call.arguments.python",end:"(?=\\))(?!\\)\\s*\\()",patterns:[{match:"(,)",name:"punctuation.separator.arguments.python"},{captures:{1:{name:"keyword.operator.unpacking.arguments.python"}},match:`(?x)
  (?:(?<=[,(])|^) \\s* (\\*{1,2})
`},{include:"#lambda-incomplete"},{include:"#illegal-names"},{captures:{1:{name:"variable.parameter.function-call.python"},2:{name:"keyword.operator.assignment.python"}},match:"\\b([[:alpha:]_]\\w*)\\s*(=)(?!=)"},{match:"=(?!=)",name:"keyword.operator.assignment.python"},{include:"#expression"},{captures:{1:{name:"punctuation.definition.arguments.end.python"},2:{name:"punctuation.definition.arguments.begin.python"}},match:"\\s*(\\))\\s*(\\()"}]},"function-call":{begin:`(?x)
  \\b(?=
    ([[:alpha:]_]\\w*) \\s* (\\()
  )
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.function-call.python",patterns:[{include:"#special-variables"},{include:"#function-name"},{include:"#function-arguments"}]},"function-declaration":{begin:`(?x)
  \\s*
  (?:\\b(async) \\s+)? \\b(def)\\s+
    (?=
      [[:alpha:]_][[:word:]]* \\s* \\(
    )
`,beginCaptures:{1:{name:"storage.type.function.async.python"},2:{name:"storage.type.function.python"}},end:`(:|(?=[#'"\\n]))`,endCaptures:{1:{name:"punctuation.section.function.begin.python"}},name:"meta.function.python",patterns:[{include:"#function-def-name"},{include:"#parameters"},{include:"#line-continuation"},{include:"#return-annotation"}]},"function-def-name":{patterns:[{include:"#illegal-object-name"},{include:"#builtin-possible-callables"},{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,name:"entity.name.function.python"}]},"function-name":{patterns:[{include:"#builtin-possible-callables"},{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.function-call.generic.python"}]},generator:{begin:"\\bfor\\b",beginCaptures:{0:{name:"keyword.control.flow.python"}},end:"\\bin\\b",endCaptures:{0:{name:"keyword.control.flow.python"}},patterns:[{include:"#expression"}]},"illegal-anno":{match:"->",name:"invalid.illegal.annotation.python"},"illegal-names":{captures:{1:{name:"keyword.control.flow.python"},2:{name:"keyword.control.import.python"}},match:`(?x)
  \\b(?:
    (
      and | assert | async | await | break | class | continue | def
      | del | elif | else | except | finally | for | from | global
      | if | in | is | (?<=\\.)lambda | lambda(?=\\s*[\\.=])
      | nonlocal | not | or | pass | raise | return | try | while | with
      | yield
    ) | (
      as | import
    )
  )\\b
`},"illegal-object-name":{match:"\\b(True|False|None)\\b",name:"keyword.illegal.name.python"},"illegal-operator":{patterns:[{match:"&&|\\|\\||--|\\+\\+",name:"invalid.illegal.operator.python"},{match:"[?$]",name:"invalid.illegal.operator.python"},{match:"!\\b",name:"invalid.illegal.operator.python"}]},import:{patterns:[{begin:"\\b(?<!\\.)(from)\\b(?=.+import)",beginCaptures:{1:{name:"keyword.control.import.python"}},end:"$|(?=import)",patterns:[{match:"\\.+",name:"punctuation.separator.period.python"},{include:"#expression"}]},{begin:"\\b(?<!\\.)(import)\\b",beginCaptures:{1:{name:"keyword.control.import.python"}},end:"$",patterns:[{match:"\\b(?<!\\.)as\\b",name:"keyword.control.import.python"},{include:"#expression"}]}]},impossible:{match:"$.^"},"inheritance-identifier":{captures:{1:{name:"entity.other.inherited-class.python"}},match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`},"inheritance-name":{patterns:[{include:"#lambda-incomplete"},{include:"#builtin-possible-callables"},{include:"#inheritance-identifier"}]},"item-access":{patterns:[{begin:`(?x)
  \\b(?=
    [[:alpha:]_]\\w* \\s* \\[
  )
`,end:"(\\])",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},name:"meta.item-access.python",patterns:[{include:"#item-name"},{include:"#item-index"},{include:"#expression"}]}]},"item-index":{begin:"(\\[)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.python"}},contentName:"meta.item-access.arguments.python",end:"(?=\\])",patterns:[{match:":",name:"punctuation.separator.slice.python"},{include:"#expression"}]},"item-name":{patterns:[{include:"#special-variables"},{include:"#builtin-functions"},{include:"#special-names"},{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.indexed-name.python"}]},lambda:{patterns:[{captures:{1:{name:"keyword.control.flow.python"}},match:"((?<=\\.)lambda|lambda(?=\\s*[\\.=]))"},{captures:{1:{name:"storage.type.function.lambda.python"}},match:"\\b(lambda)\\s*?(?=[,\\n]|$)"},{begin:`(?x)
  \\b (lambda) \\b
`,beginCaptures:{1:{name:"storage.type.function.lambda.python"}},contentName:"meta.function.lambda.parameters.python",end:"(:)|(\\n)",endCaptures:{1:{name:"punctuation.section.function.lambda.begin.python"}},name:"meta.lambda-function.python",patterns:[{match:"/",name:"keyword.operator.positional.parameter.python"},{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.parameter.python"},{include:"#lambda-nested-incomplete"},{include:"#illegal-names"},{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}},match:"([[:alpha:]_]\\w*)\\s*(?:(,)|(?=:|$))"},{include:"#comments"},{include:"#backticks"},{include:"#illegal-anno"},{include:"#lambda-parameter-with-default"},{include:"#line-continuation"},{include:"#illegal-operator"}]}]},"lambda-incomplete":{match:"\\blambda(?=\\s*[,)])",name:"storage.type.function.lambda.python"},"lambda-nested-incomplete":{match:"\\blambda(?=\\s*[:,)])",name:"storage.type.function.lambda.python"},"lambda-parameter-with-default":{begin:`(?x)
  \\b
  ([[:alpha:]_]\\w*) \\s* (=)
`,beginCaptures:{1:{name:"variable.parameter.function.language.python"},2:{name:"keyword.operator.python"}},end:"(,)|(?=:|$)",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},"line-continuation":{patterns:[{captures:{1:{name:"punctuation.separator.continuation.line.python"},2:{name:"invalid.illegal.line.continuation.python"}},match:"(\\\\)\\s*(\\S.*$\\n?)"},{begin:"(\\\\)\\s*$\\n?",beginCaptures:{1:{name:"punctuation.separator.continuation.line.python"}},end:`(?x)
  (?=^\\s*$)
  |
  (?! (\\s* [rR]? (\\'\\'\\'|\\"\\"\\"|\\'|\\"))
      |
      (\\G $)  (?# '\\G' is necessary for ST)
  )
`,patterns:[{include:"#regexp"},{include:"#string"}]}]},list:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.list.begin.python"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.list.end.python"}},patterns:[{include:"#expression"}]},literal:{patterns:[{match:"\\b(True|False|None|NotImplemented|Ellipsis)\\b",name:"constant.language.python"},{include:"#number"}]},"loose-default":{begin:"(=)",beginCaptures:{1:{name:"keyword.operator.python"}},end:"(,)|(?=\\))",endCaptures:{1:{name:"punctuation.separator.parameters.python"}},patterns:[{include:"#expression"}]},"magic-function-names":{captures:{1:{name:"support.function.magic.python"}},match:`(?x)
  \\b(
    __(?:
      abs | add | aenter | aexit | aiter | and | anext
      | await | bool | call | ceil | class_getitem
      | cmp | coerce | complex | contains | copy
      | deepcopy | del | delattr | delete | delitem
      | delslice | dir | div | divmod | enter | eq
      | exit | float | floor | floordiv | format | ge
      | get | getattr | getattribute | getinitargs
      | getitem | getnewargs | getslice | getstate | gt
      | hash | hex | iadd | iand | idiv | ifloordiv |
      | ilshift | imod | imul | index | init
      | instancecheck | int | invert | ior | ipow
      | irshift | isub | iter | itruediv | ixor | le
      | len | long | lshift | lt | missing | mod | mul
      | ne | neg | new | next | nonzero | oct | or | pos
      | pow | radd | rand | rdiv | rdivmod | reduce
      | reduce_ex | repr | reversed | rfloordiv |
      | rlshift | rmod | rmul | ror | round | rpow
      | rrshift | rshift | rsub | rtruediv | rxor | set
      | setattr | setitem | set_name | setslice
      | setstate | sizeof | str | sub | subclasscheck
      | truediv | trunc | unicode | xor | matmul
      | rmatmul | imatmul | init_subclass | set_name
      | fspath | bytes | prepare | length_hint
    )__
  )\\b
`},"magic-names":{patterns:[{include:"#magic-function-names"},{include:"#magic-variable-names"}]},"magic-variable-names":{captures:{1:{name:"support.variable.magic.python"}},match:`(?x)
  \\b(
    __(?:
      all | annotations | bases | builtins | class
      | closure | code | debug | defaults | dict | doc | file | func
      | globals | kwdefaults | match_args | members | metaclass | methods
      | module | mro | mro_entries | name | qualname | post_init | self
      | signature | slots | subclasses | version | weakref | wrapped
      | classcell | spec | path | package | future | traceback
    )__
  )\\b
`},"member-access":{begin:"(\\.)\\s*(?!\\.)",beginCaptures:{1:{name:"punctuation.separator.period.python"}},end:`(?x)
  # stop when you've just read non-whitespace followed by non-word
  # i.e. when finished reading an identifier or function call
  (?<=\\S)(?=\\W) |
  # stop when seeing the start of something that's not a word,
  # i.e. when seeing a non-identifier
  (^|(?<=\\s))(?=[^\\\\\\w\\s]) |
  $
`,name:"meta.member.access.python",patterns:[{include:"#function-call"},{include:"#member-access-base"},{include:"#member-access-attribute"}]},"member-access-attribute":{match:`(?x)
  \\b ([[:alpha:]_]\\w*) \\b
`,name:"meta.attribute.python"},"member-access-base":{patterns:[{include:"#magic-names"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#special-names"},{include:"#line-continuation"},{include:"#item-access"}]},"member-access-class":{begin:"(\\.)\\s*(?!\\.)",beginCaptures:{1:{name:"punctuation.separator.period.python"}},end:"(?<=\\S)(?=\\W)|$",name:"meta.member.access.python",patterns:[{include:"#call-wrapper-inheritance"},{include:"#member-access-base"},{include:"#inheritance-identifier"}]},number:{name:"constant.numeric.python",patterns:[{include:"#number-float"},{include:"#number-dec"},{include:"#number-hex"},{include:"#number-oct"},{include:"#number-bin"},{include:"#number-long"},{match:"\\b[0-9]+\\w+",name:"invalid.illegal.name.python"}]},"number-bin":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
  (?<![\\w\\.])
    (0[bB]) (_?[01])+
  \\b
`,name:"constant.numeric.bin.python"},"number-dec":{captures:{1:{name:"storage.type.imaginary.number.python"},2:{name:"invalid.illegal.dec.python"}},match:`(?x)
  (?<![\\w\\.])(?:
      [1-9](?: _?[0-9] )*
      |
      0+
      |
      [0-9](?: _?[0-9] )* ([jJ])
      |
      0 ([0-9]+)(?![eE\\.])
  )\\b
`,name:"constant.numeric.dec.python"},"number-float":{captures:{1:{name:"storage.type.imaginary.number.python"}},match:`(?x)
  (?<! \\w)(?:
    (?:
      \\.[0-9](?: _?[0-9] )*
      |
      [0-9](?: _?[0-9] )* \\. [0-9](?: _?[0-9] )*
      |
      [0-9](?: _?[0-9] )* \\.
    ) (?: [eE][+-]?[0-9](?: _?[0-9] )* )?
    |
    [0-9](?: _?[0-9] )* (?: [eE][+-]?[0-9](?: _?[0-9] )* )
  )([jJ])?\\b
`,name:"constant.numeric.float.python"},"number-hex":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
  (?<![\\w\\.])
    (0[xX]) (_?[0-9a-fA-F])+
  \\b
`,name:"constant.numeric.hex.python"},"number-long":{captures:{2:{name:"storage.type.number.python"}},match:`(?x)
  (?<![\\w\\.])
    ([1-9][0-9]* | 0) ([lL])
  \\b
`,name:"constant.numeric.bin.python"},"number-oct":{captures:{1:{name:"storage.type.number.python"}},match:`(?x)
  (?<![\\w\\.])
    (0[oO]) (_?[0-7])+
  \\b
`,name:"constant.numeric.oct.python"},"odd-function-call":{begin:`(?x)
  (?<= \\] | \\) ) \\s*
  (?=\\()
`,end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.python"}},patterns:[{include:"#function-arguments"}]},operator:{captures:{1:{name:"keyword.operator.logical.python"},2:{name:"keyword.control.flow.python"},3:{name:"keyword.operator.bitwise.python"},4:{name:"keyword.operator.arithmetic.python"},5:{name:"keyword.operator.comparison.python"},6:{name:"keyword.operator.assignment.python"}},match:`(?x)
    \\b(?<!\\.)
      (?:
        (and | or | not | in | is)                         (?# 1)
        |
        (for | if | else | await | (?:yield(?:\\s+from)?))  (?# 2)
      )
    (?!\\s*:)\\b

    | (<< | >> | & | \\| | \\^ | ~)                          (?# 3)

    | (\\*\\* | \\* | \\+ | - | % | // | / | @)                (?# 4)

    | (!= | == | >= | <= | < | >)                          (?# 5)

    | (:=)                                                 (?# 6)
`},"parameter-special":{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"variable.parameter.function.language.special.self.python"},3:{name:"variable.parameter.function.language.special.cls.python"},4:{name:"punctuation.separator.parameters.python"}},match:`(?x)
  \\b ((self)|(cls)) \\b \\s*(?:(,)|(?=\\)))
`},parameters:{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.python"}},end:"(\\))",endCaptures:{1:{name:"punctuation.definition.parameters.end.python"}},name:"meta.function.parameters.python",patterns:[{match:"/",name:"keyword.operator.positional.parameter.python"},{match:"(\\*\\*|\\*)",name:"keyword.operator.unpacking.parameter.python"},{include:"#lambda-incomplete"},{include:"#illegal-names"},{include:"#illegal-object-name"},{include:"#parameter-special"},{captures:{1:{name:"variable.parameter.function.language.python"},2:{name:"punctuation.separator.parameters.python"}},match:`(?x)
  ([[:alpha:]_]\\w*)
    \\s* (?: (,) | (?=[)#\\n=]))
`},{include:"#comments"},{include:"#loose-default"},{include:"#annotated-parameter"}]},punctuation:{patterns:[{match:":",name:"punctuation.separator.colon.python"},{match:",",name:"punctuation.separator.element.python"}]},regexp:{patterns:[{include:"#regexp-single-three-line"},{include:"#regexp-double-three-line"},{include:"#regexp-single-one-line"},{include:"#regexp-double-one-line"}]},"regexp-backreference":{captures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"},2:{name:"entity.name.tag.named.backreference.regexp"},3:{name:"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"}},match:`(?x)
  (\\()  (\\?P= \\w+(?:\\s+[[:alnum:]]+)?)  (\\))
`,name:"meta.backreference.named.regexp"},"regexp-backreference-number":{captures:{1:{name:"entity.name.tag.backreference.regexp"}},match:"(\\\\[1-9]\\d?)",name:"meta.backreference.regexp"},"regexp-base-common":{patterns:[{match:"\\.",name:"support.other.match.any.regexp"},{match:"\\^",name:"support.other.match.begin.regexp"},{match:"\\$",name:"support.other.match.end.regexp"},{match:"[+*?]\\??",name:"keyword.operator.quantifier.regexp"},{match:"\\|",name:"keyword.operator.disjunction.regexp"},{include:"#regexp-escape-sequence"}]},"regexp-base-expression":{patterns:[{include:"#regexp-quantifier"},{include:"#regexp-base-common"}]},"regexp-charecter-set-escapes":{patterns:[{match:"\\\\[abfnrtv\\\\]",name:"constant.character.escape.regexp"},{include:"#regexp-escape-special"},{match:"\\\\([0-7]{1,3})",name:"constant.character.escape.regexp"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-escape-catchall"}]},"regexp-double-one-line":{begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(")|(?<!\\\\)(\\n)',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.single.python",patterns:[{include:"#double-one-regexp-expression"}]},"regexp-double-three-line":{begin:'\\b(([uU]r)|([bB]r)|(r[bB]?))(""")',beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:'(""")',endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.multi.python",patterns:[{include:"#double-three-regexp-expression"}]},"regexp-escape-catchall":{match:"\\\\(.|\\n)",name:"constant.character.escape.regexp"},"regexp-escape-character":{match:`(?x)
  \\\\ (
        x[0-9A-Fa-f]{2}
        | 0[0-7]{1,2}
        | [0-7]{3}
     )
`,name:"constant.character.escape.regexp"},"regexp-escape-sequence":{patterns:[{include:"#regexp-escape-special"},{include:"#regexp-escape-character"},{include:"#regexp-escape-unicode"},{include:"#regexp-backreference-number"},{include:"#regexp-escape-catchall"}]},"regexp-escape-special":{match:"\\\\([AbBdDsSwWZ])",name:"support.other.escape.special.regexp"},"regexp-escape-unicode":{match:`(?x)
  \\\\ (
        u[0-9A-Fa-f]{4}
        | U[0-9A-Fa-f]{8}
     )
`,name:"constant.character.unicode.regexp"},"regexp-flags":{match:"\\(\\?[aiLmsux]+\\)",name:"storage.modifier.flag.regexp"},"regexp-quantifier":{match:`(?x)
  \\{(
    \\d+ | \\d+,(\\d+)? | ,\\d+
  )\\}
`,name:"keyword.operator.quantifier.regexp"},"regexp-single-one-line":{begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\')|(?<!\\\\)(\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.single.python",patterns:[{include:"#single-one-regexp-expression"}]},"regexp-single-three-line":{begin:"\\b(([uU]r)|([bB]r)|(r[bB]?))(\\'\\'\\')",beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"storage.type.string.python"},5:{name:"punctuation.definition.string.begin.python"}},end:"(\\'\\'\\')",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.regexp.quoted.multi.python",patterns:[{include:"#single-three-regexp-expression"}]},"return-annotation":{begin:"(->)",beginCaptures:{1:{name:"punctuation.separator.annotation.result.python"}},end:"(?=:)",patterns:[{include:"#expression"}]},"round-braces":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.begin.python"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.end.python"}},patterns:[{include:"#expression"}]},semicolon:{patterns:[{match:"\\;$",name:"invalid.deprecated.semicolon.python"}]},"single-one-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:"(\\]|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"single-one-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"single-one-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-one-regexp-character-set"},{include:"#single-one-regexp-comments"},{include:"#regexp-flags"},{include:"#single-one-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-one-regexp-lookahead"},{include:"#single-one-regexp-lookahead-negative"},{include:"#single-one-regexp-lookbehind"},{include:"#single-one-regexp-lookbehind-negative"},{include:"#single-one-regexp-conditional"},{include:"#single-one-regexp-parentheses-non-capturing"},{include:"#single-one-regexp-parentheses"}]},"single-one-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-named-group":{begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-one-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'))|((?=(?<!\\\\)\\n))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-one-regexp-expression"}]},"single-three-regexp-character-set":{patterns:[{match:`(?x)
  \\[ \\^? \\] (?! .*?\\])
`},{begin:"(\\[)(\\^)?(\\])?",beginCaptures:{1:{name:"punctuation.character.set.begin.regexp constant.other.set.regexp"},2:{name:"keyword.operator.negation.regexp"},3:{name:"constant.character.set.regexp"}},end:"(\\]|(?=\\'\\'\\'))",endCaptures:{1:{name:"punctuation.character.set.end.regexp constant.other.set.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.character.set.regexp",patterns:[{include:"#regexp-charecter-set-escapes"},{match:"[^\\n]",name:"constant.character.set.regexp"}]}]},"single-three-regexp-comments":{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.comment.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"punctuation.comment.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"comment.regexp",patterns:[{include:"#codetags"}]},"single-three-regexp-conditional":{begin:"(\\()\\?\\((\\w+(?:\\s+[[:alnum:]]+)?|\\d+)\\)",beginCaptures:{0:{name:"keyword.operator.conditional.regexp"},1:{name:"punctuation.parenthesis.conditional.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-expression":{patterns:[{include:"#regexp-base-expression"},{include:"#single-three-regexp-character-set"},{include:"#single-three-regexp-comments"},{include:"#regexp-flags"},{include:"#single-three-regexp-named-group"},{include:"#regexp-backreference"},{include:"#single-three-regexp-lookahead"},{include:"#single-three-regexp-lookahead-negative"},{include:"#single-three-regexp-lookbehind"},{include:"#single-three-regexp-lookbehind-negative"},{include:"#single-three-regexp-conditional"},{include:"#single-three-regexp-parentheses-non-capturing"},{include:"#single-three-regexp-parentheses"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookahead":{begin:"(\\()\\?=",beginCaptures:{0:{name:"keyword.operator.lookahead.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookahead-negative":{begin:"(\\()\\?!",beginCaptures:{0:{name:"keyword.operator.lookahead.negative.regexp"},1:{name:"punctuation.parenthesis.lookahead.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind":{begin:"(\\()\\?<=",beginCaptures:{0:{name:"keyword.operator.lookbehind.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-lookbehind-negative":{begin:"(\\()\\?<!",beginCaptures:{0:{name:"keyword.operator.lookbehind.negative.regexp"},1:{name:"punctuation.parenthesis.lookbehind.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-named-group":{begin:`(?x)
  (\\()  (\\?P <\\w+(?:\\s+[[:alnum:]]+)?>)
`,beginCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},2:{name:"entity.name.tag.named.group.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},2:{name:"invalid.illegal.newline.python"}},name:"meta.named.regexp",patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses":{begin:"\\(",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"single-three-regexp-parentheses-non-capturing":{begin:"\\(\\?:",beginCaptures:{0:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},end:"(\\)|(?=\\'\\'\\'))",endCaptures:{1:{name:"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},2:{name:"invalid.illegal.newline.python"}},patterns:[{include:"#single-three-regexp-expression"},{include:"#comments-string-single-three"}]},"special-names":{match:`(?x)
  \\b
    # we want to see "enough", meaning 2 or more upper-case
    # letters in the beginning of the constant
    #
    # for more details refer to:
    #   https://github.com/MagicStack/MagicPython/issues/42
    (
      _* [[:upper:]] [_\\d]* [[:upper:]]
    )
    [[:upper:]\\d]* (_\\w*)?
  \\b
`,name:"constant.other.caps.python"},"special-variables":{captures:{1:{name:"variable.language.special.self.python"},2:{name:"variable.language.special.cls.python"}},match:`(?x)
  \\b (?<!\\.) (?:
    (self) | (cls)
  )\\b
`},statement:{patterns:[{include:"#import"},{include:"#class-declaration"},{include:"#function-declaration"},{include:"#generator"},{include:"#statement-keyword"},{include:"#assignment-operator"},{include:"#decorator"},{include:"#docstring-statement"},{include:"#semicolon"}]},"statement-keyword":{patterns:[{match:"\\b((async\\s+)?\\s*def)\\b",name:"storage.type.function.python"},{match:"\\b(?<!\\.)as\\b(?=.*[:\\\\])",name:"keyword.control.flow.python"},{match:"\\b(?<!\\.)as\\b",name:"keyword.control.import.python"},{match:`(?x)
  \\b(?<!\\.)(
    async | continue | del | assert | break | finally | for
    | from | elif | else | if | except | pass | raise
    | return | try | while | with
  )\\b
`,name:"keyword.control.flow.python"},{match:`(?x)
  \\b(?<!\\.)(
    global | nonlocal
  )\\b
`,name:"storage.modifier.declaration.python"},{match:"\\b(?<!\\.)(class)\\b",name:"storage.type.class.python"},{captures:{1:{name:"keyword.control.flow.python"}},match:`(?x)
  ^\\s*(
    case | match
  )(?=\\s*([-+\\w\\d(\\[{'":#]|$))\\b
`}]},string:{patterns:[{include:"#string-quoted-multi-line"},{include:"#string-quoted-single-line"},{include:"#string-bin-quoted-multi-line"},{include:"#string-bin-quoted-single-line"},{include:"#string-raw-quoted-multi-line"},{include:"#string-raw-quoted-single-line"},{include:"#string-raw-bin-quoted-multi-line"},{include:"#string-raw-bin-quoted-single-line"},{include:"#fstring-fnorm-quoted-multi-line"},{include:"#fstring-fnorm-quoted-single-line"},{include:"#fstring-normf-quoted-multi-line"},{include:"#fstring-normf-quoted-single-line"},{include:"#fstring-raw-quoted-multi-line"},{include:"#fstring-raw-quoted-single-line"}]},"string-bin-quoted-multi-line":{begin:`(\\b[bB])('''|""")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.binary.multi.python",patterns:[{include:"#string-entity"}]},"string-bin-quoted-single-line":{begin:`(\\b[bB])((['"]))`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.binary.single.python",patterns:[{include:"#string-entity"}]},"string-brace-formatting":{patterns:[{captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}},match:`(?x)
  (
    {{ | }}
    | (?:
      {
        \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
        (![rsa])?
        ( : \\w? [<>=^]? [-+ ]? \\#?
          \\d* ,? (\\.\\d+)? [bcdeEfFgGnosxX%]? )?
      })
  )
`,name:"meta.format.brace.python"},{captures:{1:{name:"constant.character.format.placeholder.other.python"},3:{name:"storage.type.format.python"},4:{name:"storage.type.format.python"}},match:`(?x)
  (
    {
      \\w* (\\.[[:alpha:]_]\\w* | \\[[^\\]'"]+\\])*
      (![rsa])?
      (:)
        [^'"{}\\n]* (?:
          \\{ [^'"}\\n]*? \\} [^'"{}\\n]*
        )*
    }
  )
`,name:"meta.format.brace.python"}]},"string-consume-escape":{match:`\\\\['"\\n\\\\]`},"string-entity":{patterns:[{include:"#escape-sequence"},{include:"#string-line-continuation"},{include:"#string-formatting"}]},"string-formatting":{captures:{1:{name:"constant.character.format.placeholder.other.python"}},match:`(?x)
  (
    % (\\([\\w\\s]*\\))?
      [-+#0 ]*
      (\\d+|\\*)? (\\.(\\d+|\\*))?
      ([hlL])?
      [diouxXeEfFgGcrsab%]
  )
`,name:"meta.format.percent.python"},"string-line-continuation":{match:"\\\\$",name:"constant.language.python"},"string-multi-bad-brace1-formatting-raw":{begin:`(?x)
    (?= \\{%
          ( .*? (?!'''|""") )
        %\\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"}]},"string-multi-bad-brace1-formatting-unicode":{begin:`(?x)
    (?= \\{%
          ( .*? (?!'''|""") )
        %\\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-multi-bad-brace2-formatting-raw":{begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!'''|""") [^!:\\.\\[}\\w]
           )
        .*?(?!'''|""")
        \\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-multi-bad-brace2-formatting-unicode":{begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!'''|""") [^!:\\.\\[}\\w]
           )
        .*?(?!'''|""")
        \\}
    )
`,end:`(?='''|""")`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-quoted-multi-line":{begin:`(?:\\b([rR])(?=[uU]))?([uU])?('''|""")`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},end:"(\\3)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.multi.python",patterns:[{include:"#string-multi-bad-brace1-formatting-unicode"},{include:"#string-multi-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-quoted-single-line":{begin:`(?:\\b([rR])(?=[uU]))?([uU])?((['"]))`,beginCaptures:{1:{name:"invalid.illegal.prefix.python"},2:{name:"storage.type.string.python"},3:{name:"punctuation.definition.string.begin.python"}},end:"(\\3)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.single.python",patterns:[{include:"#string-single-bad-brace1-formatting-unicode"},{include:"#string-single-bad-brace2-formatting-unicode"},{include:"#string-unicode-guts"}]},"string-raw-bin-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-raw-bin-quoted-multi-line":{begin:`(\\b(?:R[bB]|[bB]R))('''|""")`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.binary.multi.python",patterns:[{include:"#string-raw-bin-guts"}]},"string-raw-bin-quoted-single-line":{begin:`(\\b(?:R[bB]|[bB]R))((['"]))`,beginCaptures:{1:{name:"storage.type.string.python"},2:{name:"punctuation.definition.string.begin.python"}},end:"(\\2)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.binary.single.python",patterns:[{include:"#string-raw-bin-guts"}]},"string-raw-guts":{patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"},{include:"#string-brace-formatting"}]},"string-raw-quoted-multi-line":{begin:`\\b(([uU]R)|(R))('''|""")`,beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},end:"(\\4)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.multi.python",patterns:[{include:"#string-multi-bad-brace1-formatting-raw"},{include:"#string-multi-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-raw-quoted-single-line":{begin:`\\b(([uU]R)|(R))((['"]))`,beginCaptures:{2:{name:"invalid.deprecated.prefix.python"},3:{name:"storage.type.string.python"},4:{name:"punctuation.definition.string.begin.python"}},end:"(\\4)|((?<!\\\\)\\n)",endCaptures:{1:{name:"punctuation.definition.string.end.python"},2:{name:"invalid.illegal.newline.python"}},name:"string.quoted.raw.single.python",patterns:[{include:"#string-single-bad-brace1-formatting-raw"},{include:"#string-single-bad-brace2-formatting-raw"},{include:"#string-raw-guts"}]},"string-single-bad-brace1-formatting-raw":{begin:`(?x)
    (?= \\{%
          ( .*? (?!(['"])|((?<!\\\\)\\n)) )
        %\\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"}]},"string-single-bad-brace1-formatting-unicode":{begin:`(?x)
    (?= \\{%
          ( .*? (?!(['"])|((?<!\\\\)\\n)) )
        %\\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#escape-sequence"},{include:"#string-line-continuation"}]},"string-single-bad-brace2-formatting-raw":{begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
           )
        .*?(?!(['"])|((?<!\\\\)\\n))
        \\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#string-consume-escape"},{include:"#string-formatting"}]},"string-single-bad-brace2-formatting-unicode":{begin:`(?x)
    (?!\\{\\{)
    (?= \\{ (
              \\w*? (?!(['"])|((?<!\\\\)\\n)) [^!:\\.\\[}\\w]
           )
        .*?(?!(['"])|((?<!\\\\)\\n))
        \\}
    )
`,end:`(?=(['"])|((?<!\\\\)\\n))`,patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"}]},"string-unicode-guts":{patterns:[{include:"#escape-sequence-unicode"},{include:"#string-entity"},{include:"#string-brace-formatting"}]}},scopeName:"source.python"},m=r,s={extensions:[".builder",".druby",".duby",".eye",".fcgi",".gemspec",".god",".jbuilder",".mirah",".mspec",".pluginspec",".podspec",".prawn",".rabl",".rake",".rb",".rbi",".rbuild",".rbw",".rbx",".ru",".ruby",".spec",".thor",".watchr"],names:["jruby","macruby","mirah","rake","rb","rbx","ruby"],patterns:[{begin:"\\bclass\\b",beginCaptures:{0:{name:"keyword.control.class.ruby"}},end:"\\s*$|(?![\\s\\w.:<])",name:"meta.class.ruby",patterns:[{match:"[A-Z]\\w*",name:"entity.name.type.class.ruby"},{include:"#separators"},{begin:"(<<)\\s*",beginCaptures:{1:{name:"punctuation.definition.variable.ruby"}},contentName:"variable.other.object.ruby",end:"(?=$)|(?![\\s\\w.:])",patterns:[{match:"[A-Z]\\w*",name:"entity.name.type.class.ruby"},{include:"#separators"}]},{begin:"(<)\\s*",beginCaptures:{1:{name:"punctuation.separator.inheritance.ruby"}},contentName:"entity.other.inherited-class.ruby",end:"(?=$)|(?![\\s\\w.:])",patterns:[{match:"[A-Z]\\w*",name:"entity.name.type.class.ruby"},{include:"#separators"}]}]},{begin:"\\bmodule\\b",beginCaptures:{0:{name:"keyword.control.module.ruby"}},end:"\\s*$|(?![\\s\\w.:])",name:"meta.module.ruby",patterns:[{match:"[A-Z]\\w*(?=::)",name:"entity.other.inherited-class.module.ruby"},{match:"[A-Z]\\w*",name:"entity.name.type.module.ruby"},{include:"#separators"}]},{match:"(?<!\\.)\\belse(\\s)+if\\b",name:"invalid.deprecated.ruby"},{captures:{1:{name:"punctuation.definition.constant.hashkey.ruby"}},match:"(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)",name:"constant.other.symbol.hashkey.ruby"},{captures:{1:{name:"punctuation.definition.constant.ruby"}},match:"(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!])?)(?=\\s*=>)",name:"constant.other.symbol.hashkey.ruby"},{match:"(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\\b(?![?!])",name:"keyword.control.ruby"},{match:"(?<!\\.)\\bdo\\b",name:"keyword.control.start-block.ruby"},{match:"(?<={)(\\s+)",name:"meta.syntax.ruby.start-block"},{match:"(?<!\\.)\\b(alias|alias_method|break|next|redo|retry|return|super|undef|yield)\\b(?![?!])|\\bdefined\\?|\\b(block_given|iterator)\\?",name:"keyword.control.pseudo-method.ruby"},{match:"\\bnil\\b(?![?!])",name:"constant.language.nil.ruby"},{match:"\\b(true|false)\\b(?![?!])",name:"constant.language.boolean.ruby"},{match:"\\b(__(FILE|LINE)__)\\b(?![?!])",name:"variable.language.ruby"},{match:"\\bself\\b(?![?!])",name:"variable.language.self.ruby"},{match:"\\b(initialize|new|loop|include|extend|prepend|raise|fail|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|private_class_method|module_function|public|public_class_method|protected|refine|using)\\b(?![?!])",name:"keyword.other.special-method.ruby"},{begin:"\\b(?<!\\.|::)(require|require_relative)\\b(?![?!])",captures:{1:{name:"keyword.other.special-method.ruby"}},end:"$|(?=#|})",name:"meta.require.ruby",patterns:[{include:"$self"}]},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.instance.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(@@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.class.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(\\$)[a-zA-Z_]\\w*",name:"variable.other.readwrite.global.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(\\$)(!|@|&|`|'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|\"|-[0adFiIlpv])",name:"variable.other.readwrite.global.pre-defined.ruby"},{begin:"\\b(ENV)\\[",beginCaptures:{1:{name:"variable.other.constant.ruby"}},end:"]",name:"meta.environment-variable.ruby",patterns:[{include:"$self"}]},{match:"\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))",name:"support.class.ruby"},{match:"\\b((abort|at_exit|autoload|binding|callcc|caller|caller_locations|chomp|chop|eval|exec|exit|fork|format|gets|global_variables|gsub|lambda|load|local_variables|open|p|print|printf|proc|putc|puts|rand|readline|readlines|select|set_trace_func|sleep|spawn|sprintf|srand|sub|syscall|system|test|trace_var|trap|untrace_var|warn)\\b(?![?!])|autoload\\?|exit!)",name:"support.function.kernel.ruby"},{match:"\\b[_A-Z]\\w*\\b",name:"variable.other.constant.ruby"},{begin:`(?x)
(?=def\\b)                          # optimization to help Oniguruma fail fast
(?<=^|\\s)(def)\\s+
(
  (?:(self)(\\.|::))?
  (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix
  (?>                               # method name
    [a-zA-Z_]\\w*(?>[?!]|=(?!>))?
    |
    ===?|!=|>[>=]?|<=>|<[<=]?|[%&\`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?
  )
)
\\s*(\\()`,beginCaptures:{1:{name:"keyword.control.def.ruby"},2:{name:"entity.name.function.ruby"},3:{name:"variable.language.self.ruby"},4:{name:"punctuation.separator.method.ruby"},5:{name:"punctuation.separator.method.ruby"},6:{name:"punctuation.definition.parameters.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.ruby"}},name:"meta.function.method.with-arguments.ruby",patterns:[{begin:"(?![\\s,)])",end:"(?=,|\\)\\s*$)",patterns:[{captures:{1:{name:"storage.type.variable.ruby"},2:{name:"constant.other.symbol.hashkey.parameter.function.ruby"},3:{name:"punctuation.definition.constant.hashkey.ruby"},4:{name:"variable.parameter.function.ruby"}},match:"\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))"},{include:"$self"}]},{match:",",name:"punctuation.separator.delimiter.ruby"}]},{begin:`(?x)
(?=def\\b)                          # optimization to help Oniguruma fail fast
(?<=^|\\s)(def)\\s+
(
  (?:(self)(\\.|::))?
  (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix
  (?>                               # method name
    [a-zA-Z_]\\w*(?>[?!]|=(?!>))?
    |
    ===?|!=|>[>=]?|<=>|<[<=]?|[%&\`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?
  )
)
[ \\t]
(?=[ \\t]*[^\\s#;])                 # make sure the following is not comment`,beginCaptures:{1:{name:"keyword.control.def.ruby"},2:{name:"entity.name.function.ruby"},3:{name:"variable.language.self.ruby"},4:{name:"punctuation.separator.method.ruby"},5:{name:"punctuation.separator.method.ruby"}},end:"$",name:"meta.function.method.with-arguments.ruby",patterns:[{begin:"(?![\\s,])",end:"(?=,|$)",patterns:[{captures:{1:{name:"storage.type.variable.ruby"},2:{name:"constant.other.symbol.hashkey.parameter.function.ruby"},3:{name:"punctuation.definition.constant.hashkey.ruby"},4:{name:"variable.parameter.function.ruby"}},match:"\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))"},{include:"$self"}]},{match:",",name:"punctuation.separator.delimiter.ruby"}]},{captures:{1:{name:"keyword.control.def.ruby"},3:{name:"entity.name.function.ruby"},4:{name:"variable.language.self.ruby"},5:{name:"punctuation.separator.method.ruby"},6:{name:"punctuation.separator.method.ruby"}},match:`(?x)
(?=def\\b)                            # optimization to help Oniguruma fail fast
(?<=^|\\s)(def)\\b
(
  \\s+
  (
    (?:(self)(\\.|::))?
    (?>[a-zA-Z_]\\w*(?>(\\.|::)))*    # method prefix
    (?>                               # method name
      [a-zA-Z_]\\w*(?>[?!]|=(?!>))?
      |
      ===?|!=|>[>=]?|<=>|<[<=]?|[%&\`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?
    )
  )
)?`,name:"meta.function.method.without-arguments.ruby"},{match:`(?x)
\\b
(
  [\\d](?>_?\\d)*                             # 100_000
  (\\.(?![^[:space:][:digit:]])(?>_?\\d)*)?   # fractional part
  ([eE][-+]?\\d(?>_?\\d)*)?                   # 1.23e-4
  |
  0
  (?:
    [xX][[:xdigit:]](?>_?[[:xdigit:]])*|
    [oO]?[0-7](?>_?[0-7])*|
    [bB][01](?>_?[01])*|
    [dD]\\d(?>_?\\d)*
  )                                           # A base indicator can only be used with an integer
)\\b`,name:"constant.numeric.ruby"},{begin:":'",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:"'",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\['\\\\]",name:"constant.character.escape.ruby"}]},{begin:':"',beginCaptures:{0:{name:"punctuation.section.symbol.begin.ruby"}},end:'"',endCaptures:{0:{name:"punctuation.section.symbol.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{match:"(?<!\\()/=",name:"keyword.operator.assignment.augmented.ruby"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.single.ruby",patterns:[{match:"\\\\'|\\\\\\\\",name:"constant.character.escape.ruby"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.double.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"`",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:`(?x)
(?<![\\w)])((/))(?![?*+])
(?=
  (?:\\\\/|[^/])*+          # Do NOT change the order
  /[eimnosux]*\\s*
  (?:
    [)\\]}#.,?:]|\\|\\||&&|<=>|=>|==|=~|!~|!=|;|$|
    if|else|elsif|then|do|end|unless|while|until|or|and
  )
  |
  $
)`,captures:{1:{name:"string.regexp.interpolated.ruby"},2:{name:"punctuation.section.regexp.ruby"}},contentName:"string.regexp.interpolated.ruby",end:"((/[eimnosux]*))",patterns:[{include:"#regex_sub"}]},{begin:"%r{",beginCaptures:{0:{name:"punctuation.section.regexp.begin.ruby"}},end:"}[eimnosux]*",endCaptures:{0:{name:"punctuation.section.regexp.end.ruby"}},name:"string.regexp.interpolated.ruby",patterns:[{include:"#regex_sub"},{include:"#nest_curly_r"}]},{begin:"%r\\[",beginCaptures:{0:{name:"punctuation.section.regexp.begin.ruby"}},end:"][eimnosux]*",endCaptures:{0:{name:"punctuation.section.regexp.end.ruby"}},name:"string.regexp.interpolated.ruby",patterns:[{include:"#regex_sub"},{include:"#nest_brackets_r"}]},{begin:"%r\\(",beginCaptures:{0:{name:"punctuation.section.regexp.begin.ruby"}},end:"\\)[eimnosux]*",endCaptures:{0:{name:"punctuation.section.regexp.end.ruby"}},name:"string.regexp.interpolated.ruby",patterns:[{include:"#regex_sub"},{include:"#nest_parens_r"}]},{begin:"%r<",beginCaptures:{0:{name:"punctuation.section.regexp.begin.ruby"}},end:">[eimnosux]*",endCaptures:{0:{name:"punctuation.section.regexp.end.ruby"}},name:"string.regexp.interpolated.ruby",patterns:[{include:"#regex_sub"},{include:"#nest_ltgt_r"}]},{begin:"%r([^\\w])",beginCaptures:{0:{name:"punctuation.section.regexp.begin.ruby"}},end:"\\1[eimnosux]*",endCaptures:{0:{name:"punctuation.section.regexp.end.ruby"}},name:"string.regexp.interpolated.ruby",patterns:[{include:"#regex_sub"}]},{begin:"%I\\[",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_brackets_i"}]},{begin:"%I\\(",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_parens_i"}]},{begin:"%I<",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_ltgt_i"}]},{begin:"%I{",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_curly_i"}]},{begin:"%I([^\\w])",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"%i\\[",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_brackets"}]},{begin:"%i\\(",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_parens"}]},{begin:"%i<",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_ltgt"}]},{begin:"%i{",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_curly"}]},{begin:"%i([^\\w])",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\."}]},{begin:"%W\\[",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_brackets_i"}]},{begin:"%W\\(",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_parens_i"}]},{begin:"%W<",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_ltgt_i"}]},{begin:"%W{",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_curly_i"}]},{begin:"%W([^\\w])",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"%w\\[",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_brackets"}]},{begin:"%w\\(",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_parens"}]},{begin:"%w<",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_ltgt"}]},{begin:"%w{",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_curly"}]},{begin:"%w([^\\w])",beginCaptures:{0:{name:"punctuation.section.array.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.section.array.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\."}]},{begin:"%[Qx]?\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_parens_i"}]},{begin:"%[Qx]?\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_brackets_i"}]},{begin:"%[Qx]?{",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_curly_i"}]},{begin:"%[Qx]?<",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_ltgt_i"}]},{begin:"%[Qx]([^\\w])",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"%([^\\w\\s=])",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.interpolated.ruby",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"%q\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_parens"}]},{begin:"%q<",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_ltgt"}]},{begin:"%q\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_brackets"}]},{begin:"%q{",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_curly"}]},{begin:"%q([^\\w])",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.quoted.other.ruby",patterns:[{match:"\\\\."}]},{begin:"%s\\(",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\\\)|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_parens"}]},{begin:"%s<",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:">",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\>|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_ltgt"}]},{begin:"%s\\[",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:"]",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\]|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_brackets"}]},{begin:"%s{",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:"}",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\}|\\\\\\\\",name:"constant.character.escape.ruby"},{include:"#nest_curly"}]},{begin:"%s([^\\w])",beginCaptures:{0:{name:"punctuation.definition.symbol.begin.ruby"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.symbol.end.ruby"}},name:"constant.other.symbol.ruby",patterns:[{match:"\\\\."}]},{captures:{1:{name:"punctuation.definition.constant.ruby"}},match:`(?x)
(?<!:)(:)
(?>
  [$a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?
  |
  ===?|<=>|>[>=]?|<[<=]?|[%&\`/\\|]|\\*\\*?|=?~|[-+]@?|\\[]=?
  |
  @@?[a-zA-Z_]\\w*
)`,name:"constant.other.symbol.ruby"},{begin:"^=begin",captures:{0:{name:"punctuation.definition.comment.ruby"}},end:"^=end",name:"comment.block.documentation.ruby"},{include:"#yard"},{begin:"(^[ \\t]+)?(?=#)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.ruby"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.ruby"}},end:"\\n",name:"comment.line.number-sign.ruby"}]},{match:"(?<!\\w)\\?(\\\\(x[[:xdigit:]]{1,2}(?![[:xdigit:]])\\b|0[0-7]{0,2}(?![0-7])\\b|[^x0MC])|(\\\\[MC]-)+\\w|[^\\s\\\\])",name:"constant.numeric.ruby"},{begin:"^__END__\\n",captures:{0:{name:"string.unquoted.program-block.ruby"}},contentName:"text.plain",end:"(?=not)impossible",patterns:[{begin:"(?=<?xml|<(?i:html\\b)|!DOCTYPE (?i:html\\b))",end:"(?=not)impossible",name:"text.html.embedded.ruby",patterns:[{include:"text.html.basic"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)HTML)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.html",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)HTML)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"text.html",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"text.html.basic"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)XML)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.xml",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)XML)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"text.xml",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"text.xml"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)SQL)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.sql",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)SQL)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.sql",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.sql"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)GRAPHQL)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.graphql",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)GRAPHQL)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.graphql",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.graphql"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)CSS)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.css",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)CSS)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.css",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.css"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)CPP)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.cpp",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)CPP)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.cpp",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.c++"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)C)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.c",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)C)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.c",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.c"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.js",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.js",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.js"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)JQUERY)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.js.jquery",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)JQUERY)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.js.jquery",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.shell",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.shell",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.shell"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)LUA)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.lua",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)LUA)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.lua",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.lua"},{include:"#escaped_char"}]}]},{begin:"(?=(?><<[-~]([\"'`]?)((?:[_\\w]+_|)RUBY)\\b\\1))",end:"(?!\\G)",name:"meta.embedded.block.ruby",patterns:[{begin:"(?><<[-~]([\"'`]?)((?:[_\\w]+_|)RUBY)\\b\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},contentName:"source.ruby",end:"^\\s*\\2$\\n?",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"source.ruby"},{include:"#escaped_char"}]}]},{begin:"(?>=\\s*<<([\"'`]?)(\\w+)\\1)",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"^\\2$",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"(?>((<<[-~]([\"'`]?)(\\w+)\\3,\\s?)*<<[-~]([\"'`]?)(\\w+)\\5))",beginCaptures:{0:{name:"punctuation.definition.string.begin.ruby"}},end:"^\\s*\\6$",endCaptures:{0:{name:"punctuation.definition.string.end.ruby"}},name:"string.unquoted.heredoc.ruby",patterns:[{include:"#heredoc"},{include:"#interpolated_ruby"},{include:"#escaped_char"}]},{begin:"(?<={|{\\s|[^A-Za-z0-9_]do|^do|[^A-Za-z0-9_]do\\s|^do\\s)(\\|)",captures:{1:{name:"punctuation.separator.variable.ruby"}},end:"(?<!\\|)(\\|)(?!\\|)",patterns:[{include:"source.ruby"},{match:"[_a-zA-Z][_a-zA-Z0-9]*",name:"variable.other.block.ruby"},{match:",",name:"punctuation.separator.variable.ruby"}]},{include:"#separators"},{match:"->",name:"support.function.kernel.arrow.ruby"},{match:"<<=|%=|&{1,2}=|\\*=|\\*\\*=|\\+=|-=|\\^=|\\|{1,2}=|<<",name:"keyword.operator.assignment.augmented.ruby"},{match:"<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?",name:"keyword.operator.comparison.ruby"},{match:"(?<!\\.)\\b(and|not|or)\\b(?![?!])",name:"keyword.operator.logical.ruby"},{match:"(?<=^|[ \\t])!|&&|\\|\\||\\^",name:"keyword.operator.logical.ruby"},{match:"(%|&|\\*\\*|\\*|\\+|-|/)",name:"keyword.operator.arithmetic.ruby"},{match:"=",name:"keyword.operator.assignment.ruby"},{match:"\\||~|>>",name:"keyword.operator.other.ruby"},{match:"{",name:"punctuation.section.scope.begin.ruby"},{match:"}",name:"punctuation.section.scope.end.ruby"},{match:"\\[",name:"punctuation.section.array.begin.ruby"},{match:"]",name:"punctuation.section.array.end.ruby"},{match:"\\(|\\)",name:"punctuation.section.function.ruby"}],repository:{escaped_char:{match:"\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)",name:"constant.character.escape.ruby"},heredoc:{begin:"^<<[-~]?\\w+",end:"$",patterns:[{include:"$self"}]},interpolated_ruby:{patterns:[{begin:"#{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.ruby"}},contentName:"source.ruby",end:"}",endCaptures:{0:{name:"punctuation.section.embedded.end.ruby"}},name:"meta.embedded.line.ruby",patterns:[{include:"#nest_curly_and_self"},{include:"$self"}]},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.instance.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.class.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#\\$)[a-zA-Z_]\\w*",name:"variable.other.readwrite.global.ruby"}]},nest_brackets:{begin:"\\[",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"]",patterns:[{include:"#nest_brackets"}]},nest_brackets_i:{begin:"\\[",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"]",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_brackets_i"}]},nest_brackets_r:{begin:"\\[",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"]",patterns:[{include:"#regex_sub"},{include:"#nest_brackets_r"}]},nest_curly:{begin:"{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"}",patterns:[{include:"#nest_curly"}]},nest_curly_and_self:{patterns:[{begin:"{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"}",patterns:[{include:"#nest_curly_and_self"}]},{include:"$self"}]},nest_curly_i:{begin:"{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"}",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_curly_i"}]},nest_curly_r:{begin:"{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"}",patterns:[{include:"#regex_sub"},{include:"#nest_curly_r"}]},nest_ltgt:{begin:"<",captures:{0:{name:"punctuation.section.scope.ruby"}},end:">",patterns:[{include:"#nest_ltgt"}]},nest_ltgt_i:{begin:"<",captures:{0:{name:"punctuation.section.scope.ruby"}},end:">",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_ltgt_i"}]},nest_ltgt_r:{begin:"<",captures:{0:{name:"punctuation.section.scope.ruby"}},end:">",patterns:[{include:"#regex_sub"},{include:"#nest_ltgt_r"}]},nest_parens:{begin:"\\(",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"\\)",patterns:[{include:"#nest_parens"}]},nest_parens_i:{begin:"\\(",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"\\)",patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{include:"#nest_parens_i"}]},nest_parens_r:{begin:"\\(",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"\\)",patterns:[{include:"#regex_sub"},{include:"#nest_parens_r"}]},regex_sub:{patterns:[{include:"#interpolated_ruby"},{include:"#escaped_char"},{captures:{1:{name:"punctuation.definition.arbitrary-repetition.ruby"},3:{name:"punctuation.definition.arbitrary-repetition.ruby"}},match:"({)\\d+(,\\d+)?(})",name:"string.regexp.arbitrary-repetition.ruby"},{begin:"\\[(?:\\^?])?",captures:{0:{name:"punctuation.definition.character-class.ruby"}},end:"]",name:"string.regexp.character-class.ruby",patterns:[{include:"#escaped_char"}]},{begin:"\\(\\?#",beginCaptures:{0:{name:"punctuation.definition.comment.begin.ruby"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.comment.end.ruby"}},name:"comment.line.number-sign.ruby",patterns:[{include:"#escaped_char"}]},{begin:"\\(",captures:{0:{name:"punctuation.definition.group.ruby"}},end:"\\)",name:"string.regexp.group.ruby",patterns:[{include:"#regex_sub"}]},{begin:"(?<=^|\\s)(#)\\s(?=[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$)",beginCaptures:{1:{name:"punctuation.definition.comment.ruby"}},end:"$\\n?",endCaptures:{0:{name:"punctuation.definition.comment.ruby"}},name:"comment.line.number-sign.ruby"}]},separators:{patterns:[{match:"=>",name:"punctuation.separator.key-value.ruby"},{match:";",name:"punctuation.terminator.statement.ruby"},{match:",",name:"punctuation.separator.delimiter.ruby"},{captures:{1:{name:"punctuation.separator.namespace.ruby"}},match:"(::)(?=\\s*[A-Z])"},{match:"&?\\.|::",name:"punctuation.separator.method.ruby"},{match:":",name:"punctuation.separator.other.ruby"}]},yard:{patterns:[{include:"#yard_comment"},{include:"#yard_name_types"},{include:"#yard_tag"},{include:"#yard_types"},{include:"#yard_directive"}]},yard_comment:{begin:"^(\\s*)(#)(\\s*)(@)(abstract|api|author|deprecated|example|macro|note|overload|since|todo|version)(?=\\s|$)",beginCaptures:{2:{name:"punctuation.definition.comment.ruby"},4:{name:"comment.line.keyword.punctuation.yard.ruby"},5:{name:"comment.line.keyword.yard.ruby"}},contentName:"comment.line.string.yard.ruby",end:"^(?!\\s*#\\3\\s{2,})",name:"comment.line.number-sign.ruby",patterns:[{include:"#yard"},{include:"#yard_continuation"}]},yard_continuation:{match:"^\\s*#",name:"punctuation.definition.comment.ruby"},yard_directive:{begin:"^(\\s*)(#)(\\s*)(@!)(attribute|endgroup|group|macro|method|parse|scope|visibility)(\\s+((\\[).+(])))?(?=\\s)",beginCaptures:{2:{name:"punctuation.definition.comment.ruby"},4:{name:"comment.line.keyword.punctuation.yard.ruby"},5:{name:"comment.line.keyword.yard.ruby"},6:{name:"comment.line.yard.ruby"},7:{name:"comment.line.type.yard.ruby"},8:{name:"comment.line.punctuation.yard.ruby"},9:{name:"comment.line.punctuation.yard.ruby"}},contentName:"comment.line.string.yard.ruby",end:"^(?!\\s*#\\3\\s{2,})",name:"comment.line.number-sign.ruby",patterns:[{include:"#yard"},{include:"#yard_continuation"}]},yard_name_types:{begin:"^(\\s*)(#)(\\s*)(@)(attr|attr_reader|attr_writer|option|param|see|yieldparam)(?=\\s)(\\s+([a-z_][a-zA-Z_]*))?(\\s+((\\[).+(])))?",beginCaptures:{10:{name:"comment.line.punctuation.yard.ruby"},11:{name:"comment.line.punctuation.yard.ruby"},2:{name:"punctuation.definition.comment.ruby"},4:{name:"comment.line.keyword.punctuation.yard.ruby"},5:{name:"comment.line.keyword.yard.ruby"},6:{name:"comment.line.yard.ruby"},7:{name:"comment.line.parameter.yard.ruby"},8:{name:"comment.line.yard.ruby"},9:{name:"comment.line.type.yard.ruby"}},contentName:"comment.line.string.yard.ruby",end:"^(?!\\s*#\\3\\s{2,})",name:"comment.line.number-sign.ruby",patterns:[{include:"#yard"},{include:"#yard_continuation"}]},yard_tag:{captures:{2:{name:"punctuation.definition.comment.ruby"},4:{name:"comment.line.keyword.punctuation.yard.ruby"},5:{name:"comment.line.keyword.yard.ruby"}},match:"^(\\s*)(#)(\\s*)(@)(private)$",name:"comment.line.number-sign.ruby"},yard_types:{begin:"^(\\s*)(#)(\\s*)(@)(raise|return|yield(?:return)?)(?=\\s)(\\s+((\\[).+(])))?",beginCaptures:{2:{name:"punctuation.definition.comment.ruby"},4:{name:"comment.line.keyword.punctuation.yard.ruby"},5:{name:"comment.line.keyword.yard.ruby"},6:{name:"comment.line.yard.ruby"},7:{name:"comment.line.type.yard.ruby"},8:{name:"comment.line.punctuation.yard.ruby"},9:{name:"comment.line.punctuation.yard.ruby"}},contentName:"comment.line.string.yard.ruby",end:"^(?!\\s*#\\3\\s{2,})",name:"comment.line.number-sign.ruby",patterns:[{include:"#yard"},{include:"#yard_continuation"}]}},scopeName:"source.ruby"},g=s,o={extensions:[".swift"],names:["swift"],patterns:[{include:"#root"}],repository:{"async-throws":{captures:{1:{name:"invalid.illegal.await-must-precede-throws.swift"},2:{name:"keyword.control.exception.swift"},3:{name:"keyword.control.async.swift"}},match:"\\b(?:(throws\\s+async|rethrows\\s+async)|(throws|rethrows)|(async))\\b"},attributes:{patterns:[{begin:"((@)available)(\\()",beginCaptures:{1:{name:"storage.modifier.attribute.swift"},2:{name:"punctuation.definition.attribute.swift"},3:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.attribute.available.swift",patterns:[{captures:{1:{name:"keyword.other.platform.os.swift"},2:{name:"constant.numeric.swift"}},match:"\\b(swift|(?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))?"},{begin:"\\b(introduced|deprecated|obsoleted)\\s*(:)\\s*",beginCaptures:{1:{name:"keyword.other.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{match:"\\b[0-9]+(?:\\.[0-9]+)*\\b",name:"constant.numeric.swift"}]},{begin:'\\b(message|renamed)\\s*(:)\\s*(?=")',beginCaptures:{1:{name:"keyword.other.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{include:"#literals"}]},{captures:{1:{name:"keyword.other.platform.all.swift"},2:{name:"keyword.other.swift"},3:{name:"invalid.illegal.character-not-allowed-here.swift"}},match:"(?:(\\*)|\\b(deprecated|unavailable|noasync)\\b)\\s*(.*?)(?=[,)])"}]},{begin:"((@)objc)(\\()",beginCaptures:{1:{name:"storage.modifier.attribute.swift"},2:{name:"punctuation.definition.attribute.swift"},3:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.attribute.objc.swift",patterns:[{captures:{1:{name:"invalid.illegal.missing-colon-after-selector-piece.swift"}},match:"\\w*(?::(?:\\w*:)*(\\w*))?",name:"entity.name.function.swift"}]},{begin:"(@)(?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)",beginCaptures:{0:{name:"storage.modifier.attribute.swift"},1:{name:"punctuation.definition.attribute.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G\\()",name:"meta.attribute.swift",patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.arguments.attribute.swift",patterns:[{include:"#expressions"}]}]}]},"builtin-functions":{patterns:[{match:"(?<=\\.)(?:s(?:ort(?:ed)?|plit)|contains|index|partition|f(?:i(?:lter|rst)|orEach|latMap)|with(?:MutableCharacters|CString|U(?:nsafe(?:Mutable(?:BufferPointer|Pointer(?:s|To(?:Header|Elements)))|BufferPointer)|TF8Buffer))|m(?:in|a(?:p|x)))(?=\\s*[({])\\b",name:"support.function.swift"},{match:"(?<=\\.)(?:s(?:ymmetricDifference|t(?:oreBytes|arts|ride)|ortInPlace|u(?:ccessor|ffix|btract(?:ing|InPlace|WithOverflow)?)|quareRoot|amePosition)|h(?:oldsUnique(?:Reference|OrPinnedReference)|as(?:Suffix|Prefix))|ne(?:gate(?:d)?|xt)|c(?:o(?:untByEnumerating|py(?:Bytes)?)|lamp(?:ed)?|reate)|t(?:o(?:IntMax|Opaque|UIntMax)|ake(?:RetainedValue|UnretainedValue)|r(?:uncatingRemainder|a(?:nscodedLength|ilSurrogate)))|i(?:s(?:MutableAndUniquelyReferenced(?:OrPinned)?|S(?:trictSu(?:perset(?:Of)?|bset(?:Of)?)|u(?:perset(?:Of)?|bset(?:Of)?))|Continuation|T(?:otallyOrdered|railSurrogate)|Disjoint(?:With)?|Unique(?:Reference|lyReferenced(?:OrPinned)?)|Equal|Le(?:ss(?:ThanOrEqualTo)?|adSurrogate))|n(?:sert(?:ContentsOf)?|tersect(?:ion|InPlace)?|itialize(?:Memory|From)?|dex(?:Of|ForKey)))|o(?:verlaps|bjectAt)|d(?:i(?:stance(?:To)?|vide(?:d|WithOverflow)?)|e(?:s(?:cendant|troy)|code(?:CString)?|initialize|alloc(?:ate(?:Capacity)?)?)|rop(?:First|Last))|u(?:n(?:ion(?:InPlace)?|derestimateCount|wrappedOrError)|p(?:date(?:Value)?|percased))|join(?:ed|WithSeparator)|p(?:op(?:First|Last)|ass(?:Retained|Unretained)|re(?:decessor|fix))|e(?:scape(?:d)?|n(?:code|umerate(?:d)?)|lementsEqual|xclusiveOr(?:InPlace)?)|f(?:orm(?:Remainder|S(?:ymmetricDifference|quareRoot)|TruncatingRemainder|In(?:tersection|dex)|Union)|latten|rom(?:CString(?:RepairingIllFormedUTF8)?|Opaque))|w(?:i(?:thMemoryRebound|dth)|rite(?:To)?)|l(?:o(?:wercased|ad)|e(?:adSurrogate|xicographical(?:Compare|lyPrecedes)))|a(?:ss(?:ign(?:BackwardFrom|From)?|umingMemoryBound)|d(?:d(?:ing(?:Product)?|Product|WithOverflow)?|vanced(?:By)?)|utorelease|ppend(?:ContentsOf)?|lloc(?:ate)?|bs)|r(?:ound(?:ed)?|e(?:serveCapacity|tain|duce|place(?:Range|Subrange)?|verse(?:d)?|quest(?:NativeBuffer|UniqueMutableBackingBuffer)|lease|m(?:ove(?:Range|Subrange|Value(?:ForKey)?|First|Last|A(?:tIndex|ll))?|ainder(?:WithOverflow)?)))|ge(?:nerate|t(?:Objects|Element))|m(?:in(?:imum(?:Magnitude)?|Element)|ove(?:Initialize(?:Memory|BackwardFrom|From)?|Assign(?:From)?)?|ultipl(?:y(?:WithOverflow)?|ied)|easure|a(?:ke(?:Iterator|Description)|x(?:imum(?:Magnitude)?|Element)))|bindMemory)(?=\\s*\\()",name:"support.function.swift"},{match:"(?<=\\.)(?:s(?:uperclassMirror|amePositionIn|tartsWith)|nextObject|c(?:haracterAtIndex|o(?:untByEnumeratingWithState|pyWithZone)|ustom(?:Mirror|PlaygroundQuickLook))|is(?:EmptyInput|ASCII)|object(?:Enumerator|ForKey|AtIndex)|join|put|keyEnumerator|withUnsafeMutablePointerToValue|length|getMirror|m(?:oveInitializeAssignFrom|ember))(?=\\s*\\()",name:"support.function.swift"}]},"builtin-global-functions":{patterns:[{begin:"\\b(type)(\\()\\s*(of)(:)",beginCaptures:{1:{name:"support.function.dynamic-type.swift"},2:{name:"punctuation.definition.arguments.begin.swift"},3:{name:"support.variable.parameter.swift"},4:{name:"punctuation.separator.argument-label.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{include:"#expressions"}]},{match:"\\b(?:anyGenerator|autoreleasepool)(?=\\s*[({])\\b",name:"support.function.swift"},{match:"\\b(?:s(?:tride(?:of(?:Value)?)?|izeof(?:Value)?|equence|wap)|numericCast|transcode|is(?:UniquelyReferenced(?:NonObjC)?|KnownUniquelyReferenced)|zip|d(?:ump|ebugPrint)|unsafe(?:BitCast|Downcast|Unwrap|Address(?:Of)?)|pr(?:int|econdition(?:Failure)?)|fatalError|with(?:Unsafe(?:MutablePointer|Pointer)|ExtendedLifetime|VaList)|a(?:ssert(?:ionFailure)?|lignof(?:Value)?|bs)|re(?:peatElement|adLine)|getVaList|m(?:in|ax))(?=\\s*\\()",name:"support.function.swift"},{match:"\\b(?:s(?:ort|uffix|pli(?:ce|t))|insert|overlaps|d(?:istance|rop(?:First|Last))|join|prefix|extend|withUnsafe(?:MutablePointers|Pointers)|lazy|advance|re(?:flect|move(?:Range|Last|A(?:tIndex|ll))))(?=\\s*\\()",name:"support.function.swift"}]},"builtin-properties":{patterns:[{match:"(?<=^Process\\.|\\WProcess\\.|^CommandLine\\.|\\WCommandLine\\.)(arguments|argc|unsafeArgv)",name:"support.variable.swift"},{match:"(?<=\\.)(?:s(?:t(?:artIndex|ri(?:ngValue|de))|i(?:ze|gn(?:BitIndex|ificand(?:Bit(?:Count|Pattern)|Width)?|alingNaN)?)|u(?:perclassMirror|mmary|bscriptBaseAddress))|h(?:eader|as(?:hValue|PointerRepresentation))|n(?:ulTerminatedUTF8|ext(?:Down|Up)|a(?:n|tiveOwner))|c(?:haracters|ount(?:TrailingZeros)?|ustom(?:Mirror|PlaygroundQuickLook)|apacity)|i(?:s(?:S(?:ign(?:Minus|aling(?:NaN)?)|ubnormal)|N(?:ormal|aN)|Canonical|Infinite|Zero|Empty|Finite|ASCII)|n(?:dices|finity)|dentity)|owner|de(?:scription|bugDescription)|u(?:n(?:safelyUnwrapped|icodeScalar(?:s)?|derestimatedCount)|tf(?:16|8(?:Start|C(?:String|odeUnitCount))?)|intValue|ppercaseString|lp(?:OfOne)?)|p(?:i|ointee)|e(?:ndIndex|lements|xponent(?:Bit(?:Count|Pattern))?)|value(?:s)?|keys|quietNaN|f(?:irst(?:ElementAddress(?:IfContiguous)?)?|loatingPointClass)|l(?:ittleEndian|owercaseString|eastNo(?:nzeroMagnitude|rmalMagnitude)|a(?:st|zy))|a(?:l(?:ignment|l(?:ocatedElementCount|Zeros))|rray(?:PropertyIsNativeTypeChecked)?)|ra(?:dix|wValue)|greatestFiniteMagnitude|m(?:in|emory|ax)|b(?:yteS(?:ize|wapped)|i(?:nade|tPattern|gEndian)|uffer|ase(?:Address)?))\\b",name:"support.variable.swift"},{match:"(?<=\\.)(?:boolValue|disposition|end|objectIdentifier|quickLookObject|start|valueType)\\b",name:"support.variable.swift"},{match:"(?<=\\.)(?:s(?:calarValue|i(?:ze|gnalingNaN)|o(?:und|me)|uppressed|prite|et)|n(?:one|egative(?:Subnormal|Normal|Infinity|Zero))|c(?:ol(?:or|lection)|ustomized)|t(?:o(?:NearestOr(?:Even|AwayFromZero)|wardZero)|uple|ext)|i(?:nt|mage)|optional|d(?:ictionary|o(?:uble|wn))|u(?:Int|p|rl)|p(?:o(?:sitive(?:Subnormal|Normal|Infinity|Zero)|int)|lus)|e(?:rror|mptyInput)|view|quietNaN|float|a(?:ttributedString|wayFromZero)|r(?:ectangle|ange)|generated|minus|b(?:ool|ezierPath))\\b",name:"support.variable.swift"}]},"builtin-types":{patterns:[{include:"#builtin-class-type"},{include:"#builtin-enum-type"},{include:"#builtin-protocol-type"},{include:"#builtin-struct-type"},{include:"#builtin-typealias"},{match:"\\bAny\\b",name:"support.type.any.swift"}],repository:{"builtin-class-type":{match:"\\b(Managed(Buffer|ProtoBuffer)|NonObjectiveCBase|AnyGenerator)\\b",name:"support.class.swift"},"builtin-enum-type":{patterns:[{match:"\\b(?:CommandLine|Process(?=\\.))\\b",name:"support.constant.swift"},{match:"\\bNever\\b",name:"support.constant.never.swift"},{match:"\\b(?:ImplicitlyUnwrappedOptional|Representation|MemoryLayout|FloatingPointClassification|SetIndexRepresentation|SetIteratorRepresentation|FloatingPointRoundingRule|UnicodeDecodingResult|Optional|DictionaryIndexRepresentation|AncestorRepresentation|DisplayStyle|PlaygroundQuickLook|Never|FloatingPointSign|Bit|DictionaryIteratorRepresentation)\\b",name:"support.type.swift"},{match:"\\b(?:MirrorDisposition|QuickLookObject)\\b",name:"support.type.swift"}]},"builtin-protocol-type":{patterns:[{match:"\\b(?:Ra(?:n(?:domAccess(?:Collection|Indexable)|geReplaceable(?:Collection|Indexable))|wRepresentable)|M(?:irrorPath|utable(?:Collection|Indexable))|Bi(?:naryFloatingPoint|twiseOperations|directional(?:Collection|Indexable))|S(?:tr(?:ideable|eamable)|igned(?:Number|Integer)|e(?:tAlgebra|quence))|Hashable|C(?:o(?:llection|mparable)|ustom(?:Reflectable|StringConvertible|DebugStringConvertible|PlaygroundQuickLookable|LeafReflectable)|VarArg)|TextOutputStream|I(?:n(?:teger(?:Arithmetic)?|dexable(?:Base)?)|teratorProtocol)|OptionSet|Un(?:signedInteger|icodeCodec)|E(?:quatable|rror|xpressibleBy(?:BooleanLiteral|String(?:Interpolation|Literal)|NilLiteral|IntegerLiteral|DictionaryLiteral|UnicodeScalarLiteral|ExtendedGraphemeClusterLiteral|FloatLiteral|ArrayLiteral))|FloatingPoint|L(?:osslessStringConvertible|azy(?:SequenceProtocol|CollectionProtocol))|A(?:nyObject|bsoluteValuable))\\b",name:"support.type.swift"},{match:"\\b(?:Ran(?:domAccessIndexType|geReplaceableCollectionType)|GeneratorType|M(?:irror(?:Type|PathType)|utable(?:Sliceable|CollectionType))|B(?:i(?:twiseOperationsType|directionalIndexType)|oolean(?:Type|LiteralConvertible))|S(?:tring(?:InterpolationConvertible|LiteralConvertible)|i(?:nkType|gned(?:NumberType|IntegerType))|e(?:tAlgebraType|quenceType)|liceable)|NilLiteralConvertible|C(?:ollectionType|VarArgType)|Inte(?:rvalType|ger(?:Type|LiteralConvertible|ArithmeticType))|O(?:utputStreamType|ptionSetType)|DictionaryLiteralConvertible|Un(?:signedIntegerType|icode(?:ScalarLiteralConvertible|CodecType))|E(?:rrorType|xten(?:sibleCollectionType|dedGraphemeClusterLiteralConvertible))|F(?:orwardIndexType|loat(?:ingPointType|LiteralConvertible))|A(?:nyCollectionType|rrayLiteralConvertible))\\b",name:"support.type.swift"}]},"builtin-struct-type":{patterns:[{match:"\\b(?:R(?:e(?:peat(?:ed)?|versed(?:RandomAccess(?:Collection|Index)|Collection|Index))|an(?:domAccessSlice|ge(?:Replaceable(?:RandomAccessSlice|BidirectionalSlice|Slice)|Generator)?))|Generator(?:Sequence|OfOne)|M(?:irror|utable(?:Ran(?:domAccessSlice|geReplaceable(?:RandomAccessSlice|BidirectionalSlice|Slice))|BidirectionalSlice|Slice)|anagedBufferPointer)|B(?:idirectionalSlice|ool)|S(?:t(?:aticString|ri(?:ng|deT(?:hrough(?:Generator|Iterator)?|o(?:Generator|Iterator)?)))|et(?:I(?:ndex|terator))?|lice)|HalfOpenInterval|C(?:haracter(?:View)?|o(?:ntiguousArray|untable(?:Range|ClosedRange)|llectionOfOne)|OpaquePointer|losed(?:Range(?:I(?:ndex|terator))?|Interval)|VaListPointer)|I(?:n(?:t(?:16|8|32|64)?|d(?:ices|ex(?:ing(?:Generator|Iterator))?))|terator(?:Sequence|OverOne)?)|Zip2(?:Sequence|Iterator)|O(?:paquePointer|bjectIdentifier)|D(?:ictionary(?:I(?:ndex|terator)|Literal)?|ouble|efault(?:RandomAccessIndices|BidirectionalIndices|Indices))|U(?:n(?:safe(?:RawPointer|Mutable(?:RawPointer|BufferPointer|Pointer)|BufferPointer(?:Generator|Iterator)?|Pointer)|icodeScalar(?:View)?|foldSequence|managed)|TF(?:16(?:View)?|8(?:View)?|32)|Int(?:16|8|32|64)?)|Join(?:Generator|ed(?:Sequence|Iterator))|PermutationGenerator|E(?:numerate(?:Generator|Sequence|d(?:Sequence|Iterator))|mpty(?:Generator|Collection|Iterator))|Fl(?:oat(?:80)?|atten(?:Generator|BidirectionalCollection(?:Index)?|Sequence|Collection(?:Index)?|Iterator))|L(?:egacyChildren|azy(?:RandomAccessCollection|Map(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Collection|Iterator)|BidirectionalCollection|Sequence|Collection|Filter(?:Generator|BidirectionalCollection|Sequence|Collection|I(?:ndex|terator))))|A(?:ny(?:RandomAccessCollection|Generator|BidirectionalCollection|Sequence|Hashable|Collection|I(?:ndex|terator))|utoreleasingUnsafeMutablePointer|rray(?:Slice)?))\\b",name:"support.type.swift"},{match:"\\b(?:R(?:everse(?:RandomAccess(?:Collection|Index)|Collection|Index)|awByte)|Map(?:Generator|Sequence|Collection)|S(?:inkOf|etGenerator)|Zip2Generator|DictionaryGenerator|Filter(?:Generator|Sequence|Collection(?:Index)?)|LazyForwardCollection|Any(?:RandomAccessIndex|BidirectionalIndex|Forward(?:Collection|Index)))\\b",name:"support.type.swift"}]},"builtin-typealias":{patterns:[{match:"\\b(?:Raw(?:Significand|Exponent|Value)|B(?:ooleanLiteralType|uffer|ase)|S(?:t(?:orage|r(?:i(?:ngLiteralType|de)|eam(?:1|2)))|ubSequence)|NativeBuffer|C(?:hild(?:ren)?|Bool|S(?:hort|ignedChar)|odeUnit|Char(?:16|32)?|Int|Double|Unsigned(?:Short|Char|Int|Long(?:Long)?)|Float|WideChar|Long(?:Long)?)|I(?:n(?:t(?:Max|egerLiteralType)|d(?:ices|ex(?:Distance)?))|terator)|Distance|U(?:n(?:icodeScalar(?:Type|Index|View|LiteralType)|foldFirstSequence)|TF(?:16(?:Index|View)|8Index)|IntMax)|E(?:lement(?:s)?|x(?:tendedGraphemeCluster(?:Type|LiteralType)|ponent))|V(?:oid|alue)|Key|Float(?:32|LiteralType|64)|AnyClass)\\b",name:"support.type.swift"},{match:"\\b(?:Generator|PlaygroundQuickLook|UWord|Word)\\b",name:"support.type.swift"}]}}},"code-block":{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.scope.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.scope.end.swift"}},patterns:[{include:"$self"}]},comments:{patterns:[{captures:{1:{name:"punctuation.definition.comment.swift"}},match:"\\A^(#!).*$\\n?",name:"comment.line.number-sign.swift"},{begin:"/\\*\\*(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.documentation.swift",patterns:[{include:"#nested"}]},{begin:"/\\*:",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.documentation.playground.swift",patterns:[{include:"#nested"}]},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.swift"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.swift"}},name:"comment.block.swift",patterns:[{include:"#nested"}]},{match:"\\*/",name:"invalid.illegal.unexpected-end-of-block-comment.swift"},{begin:"(^[ \\t]+)?(?=//)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.swift"}},end:"(?!\\G)",patterns:[{begin:"///",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"^",name:"comment.line.triple-slash.documentation.swift"},{begin:"//:",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"^",name:"comment.line.double-slash.documentation.swift"},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.swift"}},end:"^",name:"comment.line.double-slash.swift"}]}],repository:{nested:{begin:"/\\*",end:"\\*/",patterns:[{include:"#nested"}]}}},"compiler-control":{patterns:[{begin:"^\\s*(#)(if|elseif)\\s+(false)\\b.*?(?=$|//|/\\*)",beginCaptures:{0:{name:"meta.preprocessor.conditional.swift"},1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.preprocessor.conditional.swift"},3:{name:"constant.language.boolean.swift"}},contentName:"comment.block.preprocessor.swift",end:"(?=^\\s*(#(elseif|else|endif)\\b))"},{begin:"^\\s*(#)(if|elseif)\\s+",captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.preprocessor.conditional.swift"}},end:"(?=\\s*(?://|/\\*))|$",name:"meta.preprocessor.conditional.swift",patterns:[{match:"(&&|\\|\\|)",name:"keyword.operator.logical.swift"},{match:"\\b(true|false)\\b",name:"constant.language.boolean.swift"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"support.constant.platform.architecture.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(arch)\\s*(\\()\\s*(?:(arm|arm64|powerpc64|powerpc64le|i386|x86_64|s390x)|\\w+)\\s*(\\))"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"support.constant.platform.os.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(os)\\s*(\\()\\s*(?:(macOS|OSX|iOS|tvOS|watchOS|Android|Linux|FreeBSD|Windows|PS4)|\\w+)\\s*(\\))"},{captures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"},3:{name:"entity.name.type.module.swift"},4:{name:"punctuation.definition.parameters.end.swift"}},match:"\\b(canImport)\\s*(\\()([\\p{L}_][\\p{L}_\\p{N}\\p{M}]*)(\\))"},{begin:"\\b(targetEnvironment)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))|$",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{match:"\\b(simulator|UIKitForMac)\\b",name:"support.constant.platform.environment.swift"}]},{begin:"\\b(swift|compiler)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.condition.swift"},2:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))|$",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{match:">=|<",name:"keyword.operator.comparison.swift"},{match:"\\b[0-9]+(?:\\.[0-9]+)*\\b",name:"constant.numeric.swift"}]}]},{captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.preprocessor.conditional.swift"},3:{patterns:[{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},match:"^\\s*(#)(else|endif)(.*?)(?=$|//|/\\*)",name:"meta.preprocessor.conditional.swift"},{captures:{1:{name:"punctuation.definition.preprocessor.swift"},2:{name:"keyword.control.preprocessor.sourcelocation.swift"},4:{name:"punctuation.definition.parameters.begin.swift"},5:{patterns:[{begin:'(file)\\s*(:)\\s*(?=")',beginCaptures:{1:{name:"support.variable.parameter.swift"},2:{name:"punctuation.separator.key-value.swift"}},end:"(?!\\G)",patterns:[{include:"#literals"}]},{captures:{1:{name:"support.variable.parameter.swift"},2:{name:"punctuation.separator.key-value.swift"},3:{name:"constant.numeric.integer.swift"}},match:"(line)\\s*(:)\\s*([0-9]+)"},{match:",",name:"punctuation.separator.parameters.swift"},{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]},6:{name:"punctuation.definition.parameters.begin.swift"},7:{patterns:[{match:"\\S+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},match:"^\\s*(#)(sourceLocation)((\\()([^)]*)(\\)))(.*?)(?=$|//|/\\*)",name:"meta.preprocessor.sourcelocation.swift"}]},declarations:{patterns:[{include:"#function"},{include:"#function-initializer"},{include:"#typed-variable-declaration"},{include:"#import"},{include:"#operator"},{include:"#precedencegroup"},{include:"#protocol"},{include:"#type"},{include:"#extension"},{include:"#typealias"}],repository:{"available-types":{patterns:[{include:"#comments"},{include:"#builtin-types"},{include:"#attributes"},{match:"\\basync\\b",name:"keyword.control.async.swift"},{match:"\\b(?:throws|rethrows)\\b",name:"keyword.control.exception.swift"},{match:"\\bsome\\b",name:"keyword.operator.type.opaque.swift"},{match:"\\bany\\b",name:"keyword.operator.type.existential.swift"},{match:"\\b(?:inout|isolated)\\b",name:"storage.modifier.swift"},{match:"\\bSelf\\b",name:"variable.language.swift"},{captures:{1:{name:"keyword.operator.type.function.swift"}},match:"(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])"},{captures:{1:{name:"keyword.operator.type.composition.swift"}},match:"(?<![/=\\-+!*%<>&|\\^~.])(&)(?![/=\\-+!*%<>&|\\^~.])"},{match:"[?!]",name:"keyword.operator.type.optional.swift"},{match:"\\.\\.\\.",name:"keyword.operator.function.variadic-parameter.swift"},{match:"\\bprotocol\\b",name:"keyword.operator.type.composition.swift"},{match:"(?<=\\.)(?:Protocol|Type)\\b",name:"keyword.operator.type.metatype.swift"},{include:"#tuple-type"},{include:"#collection-type"},{include:"#generic-argument-clause"}],repository:{"collection-type":{begin:"\\[",beginCaptures:{0:{name:"punctuation.section.collection-type.begin.swift"}},end:"\\]|(?=[>){}])",endCaptures:{0:{name:"punctuation.section.collection-type.end.swift"}},patterns:[{include:"#available-types"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.key-value.swift"}},end:"(?=\\]|[>){}])",patterns:[{match:":",name:"invalid.illegal.extra-colon-in-dictionary-type.swift"},{include:"#available-types"}]}]},"tuple-type":{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.tuple-type.begin.swift"}},end:"\\)|(?=[>\\]{}])",endCaptures:{0:{name:"punctuation.section.tuple-type.end.swift"}},patterns:[{include:"#available-types"}]}}},extension:{begin:"\\b(extension)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.swift",patterns:[{include:"#available-types"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{include:"#generic-where-clause"},{include:"#inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"$self"}]}]},function:{begin:`(?x)
						\\b
						(?:(nonisolated)\\s+)?
						(func)
						\\s+
						(
							(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)
						  | (?:
								(
									(?<oph>								# operator-head
										[/=\\-+!*%<>&|^~?]
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
									)
									(
										\\g<oph>
									  | (?<opc>								# operator-character
											[\\x{0300}-\\x{036F}]
										  | [\\x{1DC0}-\\x{1DFF}]
										  | [\\x{20D0}-\\x{20FF}]
										  | [\\x{FE00}-\\x{FE0F}]
										  | [\\x{FE20}-\\x{FE2F}]
										  | [\\x{E0100}-\\x{E01EF}]
										)
									)*
								)
							  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )			# Dot operators
							)
						)
						\\s*
						(?=\\(|<)
					`,beginCaptures:{1:{name:"storage.modifier.swift"},2:{name:"storage.type.function.swift"},3:{name:"entity.name.function.swift"},4:{name:"punctuation.definition.identifier.swift"},5:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})|$(?# functions in protocol declarations or generated interfaces have no body)",name:"meta.definition.function.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#parameter-clause"},{include:"#function-result"},{include:"#async-throws"},{include:"#generic-where-clause"},{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.function.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.function.end.swift"}},name:"meta.definition.function.body.swift",patterns:[{include:"$self"}]}]},"function-initializer":{begin:"(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in⇥ snippet to produce something that looks good))\\s*(?=\\(|<)",beginCaptures:{1:{name:"storage.type.function.swift",patterns:[{match:"(?<=[?!])[?!]+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},end:"(?<=\\})|$",name:"meta.definition.function.initializer.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#parameter-clause"},{include:"#async-throws"},{include:"#generic-where-clause"},{begin:"(\\{)",beginCaptures:{1:{name:"punctuation.section.function.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.section.function.end.swift"}},name:"meta.definition.function.body.swift",patterns:[{include:"$self"}]}]},"function-result":{begin:"(?<![/=\\-+!*%<>&|\\^~.])(->)(?![/=\\-+!*%<>&|\\^~.])\\s*",beginCaptures:{1:{name:"keyword.operator.function-result.swift"}},end:"(?!\\G)(?=\\{|\\bwhere\\b|;)|$",name:"meta.function-result.swift",patterns:[{include:"#available-types"}]},"generic-argument-clause":{begin:"<",beginCaptures:{0:{name:"punctuation.separator.generic-argument-clause.begin.swift"}},end:">|(?=[)\\]{}])",endCaptures:{0:{name:"punctuation.separator.generic-argument-clause.end.swift"}},name:"meta.generic-argument-clause.swift",patterns:[{include:"#available-types"}]},"generic-parameter-clause":{begin:"<",beginCaptures:{0:{name:"punctuation.separator.generic-parameter-clause.begin.swift"}},end:">|(?=[^\\w\\d:<>\\s,=&`])(?# characters besides these are never valid in a generic param list -- even if it's not really a valid clause, we should stop trying to parse it if we see one of them.)",endCaptures:{0:{name:"punctuation.separator.generic-parameter-clause.end.swift"}},name:"meta.generic-parameter-clause.swift",patterns:[{include:"#comments"},{include:"#generic-where-clause"},{captures:{1:{name:"variable.language.generic-parameter.swift"}},match:"\\b((?!\\d)\\w[\\w\\d]*)\\b"},{match:",",name:"punctuation.separator.generic-parameters.swift"},{begin:"(:)\\s*",beginCaptures:{1:{name:"punctuation.separator.generic-parameter-constraint.swift"}},end:"(?=[,>]|(?!\\G)\\bwhere\\b)",name:"meta.generic-parameter-constraint.swift",patterns:[{begin:"\\G",end:"(?=[,>]|(?!\\G)\\bwhere\\b)",name:"entity.other.inherited-class.swift",patterns:[{include:"#type-identifier"}]}]}]},"generic-where-clause":{begin:"\\b(where)\\b\\s*",beginCaptures:{1:{name:"keyword.other.generic-constraint-introducer.swift"}},end:"(?!\\G)$|(?=[>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.swift",patterns:[{include:"#comments"},{include:"#requirement-list"}],repository:{"requirement-list":{begin:"\\G|,\\s*",end:"(?=[,>{};\\n]|//|/\\*)",patterns:[{include:"#comments"},{include:"#constraint"},{include:"#available-types"},{begin:"(?<![/=\\-+!*%<>&|\\^~.])(==)(?![/=\\-+!*%<>&|\\^~.])",beginCaptures:{1:{name:"keyword.operator.generic-constraint.same-type.swift"}},end:"(?=\\s*[,>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.same-type-requirement.swift",patterns:[{include:"#available-types"}]},{begin:"(?<![/=\\-+!*%<>&|\\^~.])(:)(?![/=\\-+!*%<>&|\\^~.])",beginCaptures:{1:{name:"keyword.operator.generic-constraint.conforms-to.swift"}},end:"(?=\\s*[,>{};\\n]|//|/\\*)",name:"meta.generic-where-clause.conformance-requirement.swift",patterns:[{begin:"\\G\\s*",contentName:"entity.other.inherited-class.swift",end:"(?=\\s*[,>{};\\n]|//|/\\*)",patterns:[{include:"#available-types"}]}]}]}}},import:{begin:"(?<!\\.)\\b(import)\\s+",beginCaptures:{1:{name:"keyword.control.import.swift"}},end:"(;)|$\\n?|(?=//|/\\*)",endCaptures:{1:{name:"punctuation.terminator.statement.swift"}},name:"meta.import.swift",patterns:[{begin:"\\G(?!;|$|//|/\\*)(?:(typealias|struct|class|actor|enum|protocol|var|func)\\s+)?",beginCaptures:{1:{name:"storage.modifier.swift"}},end:"(?=;|$|//|/\\*)",patterns:[{captures:{1:{name:"punctuation.definition.identifier.swift"},2:{name:"punctuation.definition.identifier.swift"}},match:`(?x)
										(?<=\\G|\\.)
										(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)
									`,name:"entity.name.type.swift"},{match:`(?x)
										(?<=\\G|\\.)
										\\$[0-9]+
									`,name:"entity.name.type.swift"},{captures:{1:{patterns:[{match:"\\.",name:"invalid.illegal.dot-not-allowed-here.swift"}]}},match:`(?x)
										(?<=\\G|\\.)
										(?:
											(
												(?<oph>								# operator-head
													[/=\\-+!*%<>&|^~?]
												  | [\\x{00A1}-\\x{00A7}]
												  | [\\x{00A9}\\x{00AB}]
												  | [\\x{00AC}\\x{00AE}]
												  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
												  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
												  | [\\x{2030}-\\x{203E}]
												  | [\\x{2041}-\\x{2053}]
												  | [\\x{2055}-\\x{205E}]
												  | [\\x{2190}-\\x{23FF}]
												  | [\\x{2500}-\\x{2775}]
												  | [\\x{2794}-\\x{2BFF}]
												  | [\\x{2E00}-\\x{2E7F}]
												  | [\\x{3001}-\\x{3003}]
												  | [\\x{3008}-\\x{3030}]
												)
												(
													\\g<oph>
												  | (?<opc>								# operator-character
														[\\x{0300}-\\x{036F}]
													  | [\\x{1DC0}-\\x{1DFF}]
													  | [\\x{20D0}-\\x{20FF}]
													  | [\\x{FE00}-\\x{FE0F}]
													  | [\\x{FE20}-\\x{FE2F}]
													  | [\\x{E0100}-\\x{E01EF}]
													)
												)*
											)
										  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )			# Dot operators
										)
										(?=\\.|;|$|//|/\\*|\\s)
									`,name:"entity.name.type.swift"},{match:"\\.",name:"punctuation.separator.import.swift"},{begin:"(?!\\s*(;|$|//|/\\*))",end:"(?=\\s*(;|$|//|/\\*))",name:"invalid.illegal.character-not-allowed-here.swift"}]}]},"inheritance-clause":{begin:"(:)(?=\\s*\\{)|(:)\\s*",beginCaptures:{1:{name:"invalid.illegal.empty-inheritance-clause.swift"},2:{name:"punctuation.separator.inheritance-clause.swift"}},end:"(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",name:"meta.inheritance-clause.swift",patterns:[{begin:"\\bclass\\b",beginCaptures:{0:{name:"storage.type.class.swift"}},end:"(?=[={}]|(?!\\G)\\bwhere\\b)",patterns:[{include:"#comments"},{include:"#more-types"}]},{begin:"\\G",end:"(?!\\G)$|(?=[={}]|(?!\\G)\\bwhere\\b)",patterns:[{include:"#comments"},{include:"#inherited-type"},{include:"#more-types"}]}],repository:{"inherited-type":{begin:"(?=[`\\p{L}_])",end:"(?!\\G)",name:"entity.other.inherited-class.swift",patterns:[{include:"#type-identifier"}]},"more-types":{begin:",\\s*",end:"(?!\\G)(?!//|/\\*)|(?=[,={}]|(?!\\G)\\bwhere\\b)",name:"meta.inheritance-list.more-types",patterns:[{include:"#comments"},{include:"#inherited-type"},{include:"#more-types"}]}}},operator:{begin:`(?x)
						(?:
							\\b(prefix|infix|postfix)
							\\s+
						)?
						\\b
						(operator)
						\\s+
						(
							(
								(?<oph>									# operator-head
									[/=\\-+!*%<>&|^~?]
								  | [\\x{00A1}-\\x{00A7}]
								  | [\\x{00A9}\\x{00AB}]
								  | [\\x{00AC}\\x{00AE}]
								  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
								  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
								  | [\\x{2030}-\\x{203E}]
								  | [\\x{2041}-\\x{2053}]
								  | [\\x{2055}-\\x{205E}]
								  | [\\x{2190}-\\x{23FF}]
								  | [\\x{2500}-\\x{2775}]
								  | [\\x{2794}-\\x{2BFF}]
								  | [\\x{2E00}-\\x{2E7F}]
								  | [\\x{3001}-\\x{3003}]
								  | [\\x{3008}-\\x{3030}]
								)
								(
									\\g<oph>
								  | \\.									# Invalid dot
								  | (?<opc>								# operator-character
										[\\x{0300}-\\x{036F}]
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)*+
							)
						  | ( \\. ( \\g<oph> | \\g<opc> | \\. )++ )			# Dot operators
						)
						\\s*
					`,beginCaptures:{1:{name:"storage.modifier.swift"},2:{name:"storage.type.function.operator.swift"},3:{name:"entity.name.function.operator.swift"},4:{patterns:[{match:"\\.",name:"invalid.illegal.dot-not-allowed-here.swift"}]}},end:"(;)|$\\n?|(?=//|/\\*)",endCaptures:{1:{name:"punctuation.terminator.statement.swift"}},name:"meta.definition.operator.swift",patterns:[{include:"#swift2"},{include:"#swift3"},{match:"((?!$|;|//|/\\*)\\S)+",name:"invalid.illegal.character-not-allowed-here.swift"}],repository:{swift2:{begin:"\\G(\\{)",beginCaptures:{1:{name:"punctuation.definition.operator.begin.swift"}},end:"(\\})",endCaptures:{1:{name:"punctuation.definition.operator.end.swift"}},patterns:[{include:"#comments"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"keyword.other.operator.associativity.swift"}},match:"\\b(associativity)\\s+(left|right)\\b"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"constant.numeric.integer.swift"}},match:"\\b(precedence)\\s+([0-9]+)\\b"},{captures:{1:{name:"storage.modifier.swift"}},match:"\\b(assignment)\\b"}]},swift3:{captures:{2:{name:"entity.other.inherited-class.swift",patterns:[{include:"#types-precedencegroup"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},match:"\\G(:)\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"}}},"parameter-clause":{begin:"(\\()",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.swift"}},end:"(\\))(?:\\s*(async)\\b)?",endCaptures:{1:{name:"punctuation.definition.parameters.end.swift"},2:{name:"keyword.control.async.swift"}},name:"meta.parameter-clause.swift",patterns:[{include:"#parameter-list"}]},"parameter-list":{patterns:[{captures:{1:{name:"entity.name.function.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"variable.parameter.function.swift"},5:{name:"punctuation.definition.identifier.swift"},6:{name:"punctuation.definition.identifier.swift"}},match:"((?<q1>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))\\s+((?<q2>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>))(?=\\s*:)"},{captures:{1:{name:"variable.parameter.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},match:"(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)))(?=\\s*:)"},{begin:":\\s*(?!\\s)",end:"(?=[,)])",patterns:[{include:"#available-types"},{match:":",name:"invalid.illegal.extra-colon-in-parameter-list.swift"},{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.swift"}},end:"(?=[,)])",patterns:[{include:"#expressions"}]}]}]},precedencegroup:{begin:"\\b(precedencegroup)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(?=\\{)",beginCaptures:{1:{name:"storage.type.precedencegroup.swift"},2:{name:"entity.name.type.precedencegroup.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)",name:"meta.definition.precedencegroup.swift",patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.precedencegroup.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.precedencegroup.end.swift"}},patterns:[{include:"#comments"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"entity.other.inherited-class.swift",patterns:[{include:"#types-precedencegroup"}]},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},match:"\\b(higherThan|lowerThan)\\s*:\\s*((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"keyword.other.operator.associativity.swift"}},match:"\\b(associativity)\\b(?:\\s*:\\s*(right|left|none)\\b)?"},{captures:{1:{name:"storage.modifier.swift"},2:{name:"constant.language.boolean.swift"}},match:"\\b(assignment)\\b(?:\\s*:\\s*(true|false)\\b)?"}]}]},protocol:{begin:"\\b(protocol)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.protocol.swift",patterns:[{include:"#comments"},{include:"#inheritance-clause"},{include:"#generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"#protocol-method"},{include:"#protocol-initializer"},{include:"#associated-type"},{include:"$self"}]}],repository:{"associated-type":{begin:"\\b(associatedtype)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"keyword.other.declaration-specifier.swift"},2:{name:"variable.language.associatedtype.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)$|(?=[;}]|$)",name:"meta.definition.associatedtype.swift",patterns:[{include:"#inheritance-clause"},{include:"#generic-where-clause"},{include:"#typealias-assignment"}]},"protocol-initializer":{begin:"(?<!\\.)\\b(init[?!]*(?# only one is valid, but we want the in⇥ snippet to produce something that looks good))\\s*(?=\\(|<)",beginCaptures:{1:{name:"storage.type.function.swift",patterns:[{match:"(?<=[?!])[?!]+",name:"invalid.illegal.character-not-allowed-here.swift"}]}},end:"$|(?=;|//|/\\*|\\})",name:"meta.definition.function.initializer.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#parameter-clause"},{include:"#async-throws"},{include:"#generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.function.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.function.end.swift"}},name:"invalid.illegal.function-body-not-allowed-in-protocol.swift",patterns:[{include:"$self"}]}]},"protocol-method":{begin:`(?x)
								\\b
								(func)
								\\s+
								(
									(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)
		  						  | (?:
		  								(
		  									(?<oph>								# operator-head
		  										[/=\\-+!*%<>&|^~?]
		  									  | [\\x{00A1}-\\x{00A7}]
		  									  | [\\x{00A9}\\x{00AB}]
		  									  | [\\x{00AC}\\x{00AE}]
		  									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
		  									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
		  									  | [\\x{2030}-\\x{203E}]
		  									  | [\\x{2041}-\\x{2053}]
		  									  | [\\x{2055}-\\x{205E}]
		  									  | [\\x{2190}-\\x{23FF}]
		  									  | [\\x{2500}-\\x{2775}]
		  									  | [\\x{2794}-\\x{2BFF}]
		  									  | [\\x{2E00}-\\x{2E7F}]
		  									  | [\\x{3001}-\\x{3003}]
		  									  | [\\x{3008}-\\x{3030}]
		  									)
		  									(
		  										\\g<oph>
		  									  | (?<opc>								# operator-character
		  											[\\x{0300}-\\x{036F}]
		  										  | [\\x{1DC0}-\\x{1DFF}]
		  										  | [\\x{20D0}-\\x{20FF}]
		  										  | [\\x{FE00}-\\x{FE0F}]
		  										  | [\\x{FE20}-\\x{FE2F}]
		  										  | [\\x{E0100}-\\x{E01EF}]
		  										)
		  									)*
		  								)
		  							  | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )			# Dot operators
		  							)
		  						)
								\\s*
								(?=\\(|<)
							`,beginCaptures:{1:{name:"storage.type.function.swift"},2:{name:"entity.name.function.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"$|(?=;|//|/\\*|\\})",name:"meta.definition.function.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#parameter-clause"},{include:"#function-result"},{include:"#async-throws"},{include:"#generic-where-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.function.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.function.end.swift"}},name:"invalid.illegal.function-body-not-allowed-in-protocol.swift",patterns:[{include:"$self"}]}]}}},type:{patterns:[{begin:"\\b(class(?!\\s+(?:func|var|let)\\b)|struct|actor)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#generic-where-clause"},{include:"#inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"$self"}]}]},{include:"#type-enum"}]},"type-enum":{begin:"\\b(enum)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))",beginCaptures:{1:{name:"storage.type.$1.swift"},2:{name:"entity.name.type.$1.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?<=\\})",name:"meta.definition.type.$1.swift",patterns:[{include:"#comments"},{include:"#generic-parameter-clause"},{include:"#generic-where-clause"},{include:"#inheritance-clause"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.type.begin.swift"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.type.end.swift"}},name:"meta.definition.type.body.swift",patterns:[{include:"#enum-case-clause"},{include:"$self"}]}],repository:{"associated-values":{begin:"\\G\\(",beginCaptures:{0:{name:"punctuation.definition.parameters.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.parameters.end.swift"}},patterns:[{include:"#comments"},{begin:`(?x)
										(?:(_)|((?<q1>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q1>))
										\\s+
										(((?<q2>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q2>))
										\\s*(:)`,beginCaptures:{1:{name:"entity.name.function.swift"},2:{name:"invalid.illegal.distinct-labels-not-allowed.swift"},5:{name:"variable.parameter.function.swift"},7:{name:"punctuation.separator.argument-label.swift"}},end:"(?=[,)\\]])",patterns:[{include:"#available-types"}]},{begin:"(((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*\\k<q>))\\s*(:)",beginCaptures:{1:{name:"entity.name.function.swift"},2:{name:"variable.parameter.function.swift"},4:{name:"punctuation.separator.argument-label.swift"}},end:"(?=[,)\\]])",patterns:[{include:"#available-types"}]},{begin:"(?![,)\\]])(?=\\S)",end:"(?=[,)\\]])",patterns:[{include:"#available-types"},{match:":",name:"invalid.illegal.extra-colon-in-parameter-list.swift"}]}]},"enum-case":{begin:"(?x)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"constant.other.swift"}},end:"(?<=\\))|(?![=(])",patterns:[{include:"#comments"},{include:"#associated-values"},{include:"#raw-value-assignment"}]},"enum-case-clause":{begin:"\\b(case)\\b\\s*",beginCaptures:{1:{name:"storage.type.enum.case.swift"}},end:"(?=[;}])|(?!\\G)(?!//|/\\*)(?=[^\\s,])",patterns:[{include:"#comments"},{include:"#enum-case"},{include:"#more-cases"}]},"more-cases":{begin:",\\s*",end:"(?!\\G)(?!//|/\\*)(?=[;}]|[^\\s,])",name:"meta.enum-case.more-cases",patterns:[{include:"#comments"},{include:"#enum-case"},{include:"#more-cases"}]},"raw-value-assignment":{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.swift"}},end:"(?!\\G)",patterns:[{include:"#comments"},{include:"#literals"}]}}},"type-identifier":{begin:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"meta.type-name.swift",patterns:[{include:"#builtin-types"}]},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},end:"(?!<)",patterns:[{begin:"(?=<)",end:"(?!\\G)",patterns:[{include:"#generic-argument-clause"}]}]},typealias:{begin:"\\b(typealias)\\s+((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*",beginCaptures:{1:{name:"keyword.other.declaration-specifier.swift"},2:{name:"entity.name.type.typealias.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.identifier.swift"}},end:"(?!\\G)$|(?=;|//|/\\*|$)",name:"meta.definition.typealias.swift",patterns:[{begin:"\\G(?=<)",end:"(?!\\G)",patterns:[{include:"#generic-parameter-clause"}]},{include:"#typealias-assignment"}]},"typealias-assignment":{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.swift"}},end:"(?!\\G)$|(?=;|//|/\\*|$)",patterns:[{include:"#available-types"}]},"typed-variable-declaration":{begin:`(?x)
						\\b(?:(async)\\s+)?(let|var)\\b\\s+
						(?<q>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\\s*
						:
					`,beginCaptures:{1:{name:"keyword.control.async.swift"},2:{name:"keyword.other.declaration-specifier.swift"}},end:"(?=$|[={])",patterns:[{include:"#available-types"}]},"types-precedencegroup":{patterns:[{match:"\\b(?:BitwiseShift|Assignment|RangeFormation|Casting|Addition|NilCoalescing|Comparison|LogicalConjunction|LogicalDisjunction|Default|Ternary|Multiplication|FunctionArrow)Precedence\\b",name:"support.type.swift"}]}}},expressions:{patterns:[{include:"#comments"},{include:"#code-block"},{include:"#attributes"},{include:"#closure-parameter"},{include:"#literals"},{include:"#operators"},{include:"#builtin-types"},{include:"#builtin-functions"},{include:"#builtin-global-functions"},{include:"#builtin-properties"},{include:"#compound-name"},{include:"#keywords"},{include:"#function-call-expression"},{include:"#subscript-expression"},{include:"#parenthesized-expression"},{include:"#member-reference"},{include:"#availability-condition"},{match:"\\b_\\b",name:"support.variable.discard-value.swift"}],repository:{"availability-condition":{begin:"\\B(#(?:un)?available)(\\()",beginCaptures:{1:{name:"support.function.availability-condition.swift"},2:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{captures:{1:{name:"keyword.other.platform.os.swift"},2:{name:"constant.numeric.swift"}},match:"\\s*\\b((?:iOS|macOS|OSX|watchOS|tvOS|UIKitForMac)(?:ApplicationExtension)?)\\b(?:\\s+([0-9]+(?:\\.[0-9]+)*\\b))"},{captures:{1:{name:"keyword.other.platform.all.swift"},2:{name:"invalid.illegal.character-not-allowed-here.swift"}},match:"(\\*)\\s*(.*?)(?=[,)])"},{match:"[^\\s,)]+",name:"invalid.illegal.character-not-allowed-here.swift"}]},"closure-parameter":{match:"\\$[0-9]+",name:"variable.language.closure-parameter.swift"},"compound-name":{captures:{1:{name:"entity.name.function.compound-name.swift"},2:{name:"punctuation.definition.entity.swift"},3:{name:"punctuation.definition.entity.swift"},4:{patterns:[{captures:{1:{name:"punctuation.definition.entity.swift"},2:{name:"punctuation.definition.entity.swift"}},match:"(?<q>`?)(?!_:)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>):",name:"entity.name.function.compound-name.swift"}]}},match:`(?x)
						((?<q1>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q1>))       		# function name
						\\(
							(
								(
									((?<q2>\`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q2>)) 	# argument label
									:												# colon
								)+
							)
						\\)
					`},"expression-element-list":{patterns:[{include:"#comments"},{begin:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(:)",beginCaptures:{1:{name:"support.function.any-method.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.separator.argument-label.swift"}},end:"(?=[,)\\]])",patterns:[{include:"#expressions"}]},{begin:"(?![,)\\]])(?=\\S)",end:"(?=[,)\\]])",patterns:[{include:"#expressions"}]}]},"function-call-expression":{patterns:[{begin:"((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))\\s*(\\()",beginCaptures:{1:{name:"support.function.any-method.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"},4:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.function-call.swift",patterns:[{include:"#expression-element-list"}]},{begin:"(?<=[`\\])}>\\p{L}_\\p{N}\\p{M}])\\s*(\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.function-call.swift",patterns:[{include:"#expression-element-list"}]}]},"member-reference":{patterns:[{captures:{1:{name:"variable.other.swift"},2:{name:"punctuation.definition.identifier.swift"},3:{name:"punctuation.definition.identifier.swift"}},match:"(?<=\\.)((?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>))"}]},"parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.tuple.begin.swift"}},end:"(\\))\\s*((?:\\b(?:async|throws|rethrows)\\s)*)",endCaptures:{1:{name:"punctuation.section.tuple.end.swift"},2:{patterns:[{match:"\\brethrows\\b",name:"invalid.illegal.rethrows-only-allowed-on-function-declarations.swift"},{include:"#async-throws"}]}},patterns:[{include:"#expression-element-list"}]},"subscript-expression":{begin:"(?<=[`\\p{L}_\\p{N}\\p{M}])\\s*(\\[)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.swift"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},name:"meta.subscript-expression.swift",patterns:[{include:"#expression-element-list"}]}}},keywords:{patterns:[{match:"(?<!\\.)\\b(?:if|else|guard|where|switch|case|default|fallthrough)\\b",name:"keyword.control.branch.swift"},{match:"(?<!\\.)\\b(?:continue|break|fallthrough|return)\\b",name:"keyword.control.transfer.swift"},{match:"(?<!\\.)\\b(?:while|for|in)\\b",name:"keyword.control.loop.swift"},{captures:{1:{name:"keyword.control.loop.swift"},2:{name:"punctuation.whitespace.trailing.repeat.swift"}},match:"(?<!\\.)\\b(repeat)\\b(\\s*)"},{match:"(?<!\\.)\\bdefer\\b",name:"keyword.control.defer.swift"},{captures:{1:{name:"invalid.illegal.try-must-precede-await.swift"},2:{name:"keyword.control.await.swift"}},match:"(?<!\\.)\\b(?:(await\\s+try)|(await)\\b)"},{match:"(?<!\\.)\\b(?:catch|throws?|rethrows|try)\\b|\\btry[?!]\\B",name:"keyword.control.exception.swift"},{captures:{1:{name:"keyword.control.exception.swift"},2:{name:"punctuation.whitespace.trailing.do.swift"}},match:"(?<!\\.)\\b(do)\\b(\\s*)"},{captures:{1:{name:"keyword.control.async.swift"},2:{name:"storage.modifier.swift"},3:{name:"keyword.other.declaration-specifier.swift"}},match:"(?<!\\.)\\b(?:(?:(async)|(nonisolated))\\s+)?(let|var)\\b"},{match:"(?<!\\.)\\b(?:associatedtype|operator|typealias)\\b",name:"keyword.other.declaration-specifier.swift"},{match:"(?<!\\.)\\b(class|enum|extension|precedencegroup|protocol|struct|actor)\\b",name:"storage.type.$1.swift"},{match:"(?<!\\.)\\b(?:inout|static|final|lazy|mutating|nonmutating|optional|indirect|required|override|dynamic|convenience|infix|prefix|postfix)\\b",name:"storage.modifier.swift"},{match:"\\binit[?!]|\\binit\\b|(?<!\\.)\\b(?:func|deinit|subscript|didSet|get|set|willSet)\\b",name:"storage.type.function.swift"},{match:"(?<!\\.)\\b(?:fileprivate|private|internal|public|open)\\b",name:"keyword.other.declaration-specifier.accessibility.swift"},{match:"(?<!\\.)\\bunowned\\((?:safe|unsafe)\\)|(?<!\\.)\\b(?:weak|unowned)\\b",name:"keyword.other.capture-specifier.swift"},{captures:{1:{name:"keyword.operator.type.swift"},2:{name:"keyword.operator.type.metatype.swift"}},match:"(?<=\\.)(?:(dynamicType|self)|(Protocol|Type))\\b"},{match:"(?<!\\.)\\b(?:super|self|Self)\\b",name:"variable.language.swift"},{match:"\\B(?:#file|#filePath|#fileID|#line|#column|#function|#dsohandle)\\b|\\b(?:__FILE__|__LINE__|__COLUMN__|__FUNCTION__|__DSO_HANDLE__)\\b",name:"support.variable.swift"},{match:"(?<!\\.)\\bimport\\b",name:"keyword.control.import.swift"}]},literals:{patterns:[{include:"#boolean"},{include:"#numeric"},{include:"#string"},{match:"\\bnil\\b",name:"constant.language.nil.swift"},{match:"\\B#(colorLiteral|imageLiteral|fileLiteral)\\b",name:"support.function.object-literal.swift"},{match:"\\B#keyPath\\b",name:"support.function.key-path.swift"},{begin:"\\B(#selector)(\\()(?:\\s*(getter|setter)\\s*(:))?",beginCaptures:{1:{name:"support.function.selector-reference.swift"},2:{name:"punctuation.definition.arguments.begin.swift"},3:{name:"support.variable.parameter.swift"},4:{name:"punctuation.separator.argument-label.swift"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.arguments.end.swift"}},patterns:[{include:"#expressions"}]}],repository:{boolean:{match:"\\b(true|false)\\b",name:"constant.language.boolean.swift"},numeric:{patterns:[{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*(?=\\.[0-9]|[eE])(?:\\.[0-9][0-9_]*)?(?:[eE][-+]?[0-9][0-9_]*)?\\b(?!\\.[0-9])",name:"constant.numeric.float.decimal.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?[pP][-+]?[0-9][0-9_]*\\b(?!\\.[0-9])",name:"constant.numeric.float.hexadecimal.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)(?:\\.[0-9a-fA-F][0-9a-fA-F_]*)?(?:[pP][-+]?\\w*)\\b(?!\\.[0-9])",name:"invalid.illegal.numeric.float.invalid-exponent.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)(0x[0-9a-fA-F][0-9a-fA-F_]*)\\.[0-9][\\w.]*",name:"invalid.illegal.numeric.float.missing-exponent.swift"},{match:"(?<=\\s|^)\\-?\\.[0-9][\\w.]*",name:"invalid.illegal.numeric.float.missing-leading-zero.swift"},{match:"(\\B\\-|\\b)0[box]_[0-9a-fA-F_]*(?:[pPeE][+-]?\\w+)?[\\w.]+",name:"invalid.illegal.numeric.leading-underscore.swift"},{match:"(?<=[\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9]+\\b"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0b[01][01_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.binary.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0o[0-7][0-7_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.octal.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)[0-9][0-9_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.decimal.swift"},{match:"(\\B\\-|\\b)(?<![\\[\\](){}\\p{L}_\\p{N}\\p{M}]\\.)0x[0-9a-fA-F][0-9a-fA-F_]*\\b(?!\\.[0-9])",name:"constant.numeric.integer.hexadecimal.swift"},{match:"(\\B\\-|\\b)[0-9][\\w.]*",name:"invalid.illegal.numeric.other.swift"}]},string:{patterns:[{begin:'"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"""(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"},{match:"\\\\\\s*\\n",name:"constant.character.escape.newline.swift"},{include:"#string-guts"},{match:'\\S((?!\\\\\\().)*(?=""")',name:"invalid.illegal.content-before-closing-delimiter.swift"}]},{begin:'#"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"""#(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.raw.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"},{match:"\\\\#\\s*\\n",name:"constant.character.escape.newline.swift"},{include:"#raw-string-guts"},{match:'\\S((?!\\\\#\\().)*(?=""")',name:"invalid.illegal.content-before-closing-delimiter.swift"}]},{begin:'(##+)"""',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"""\\1(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.block.raw.swift",patterns:[{match:'\\G.+(?=""")|\\G.+',name:"invalid.illegal.content-after-opening-delimiter.swift"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.swift"}},end:'"(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"},{include:"#string-guts"}]},{begin:'(##+)"',beginCaptures:{0:{name:"punctuation.definition.string.begin.raw.swift"}},end:'"\\1(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.raw.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.raw.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"}]},{begin:'#"',beginCaptures:{0:{name:"punctuation.definition.string.begin.raw.swift"}},end:'"#(#*)',endCaptures:{0:{name:"punctuation.definition.string.end.raw.swift"},1:{name:"invalid.illegal.extra-closing-delimiter.swift"}},name:"string.quoted.double.single-line.raw.swift",patterns:[{match:"\\r|\\n",name:"invalid.illegal.returns-not-allowed.swift"},{include:"#raw-string-guts"}]}],repository:{"raw-string-guts":{patterns:[{match:`\\\\#[0\\\\tnr"']`,name:"constant.character.escape.swift"},{match:"\\\\#u\\{[0-9a-fA-F]{1,8}\\}",name:"constant.character.escape.unicode.swift"},{begin:"\\\\#\\(",beginCaptures:{0:{name:"punctuation.section.embedded.begin.swift"}},contentName:"source.swift",end:"(\\))",endCaptures:{0:{name:"punctuation.section.embedded.end.swift"},1:{name:"source.swift"}},name:"meta.embedded.line.swift",patterns:[{include:"$self"},{begin:"\\(",end:"\\)"}]},{match:"\\\\#.",name:"invalid.illegal.escape-not-recognized"}]},"string-guts":{patterns:[{match:`\\\\[0\\\\tnr"']`,name:"constant.character.escape.swift"},{match:"\\\\u\\{[0-9a-fA-F]{1,8}\\}",name:"constant.character.escape.unicode.swift"},{begin:"\\\\\\(",beginCaptures:{0:{name:"punctuation.section.embedded.begin.swift"}},contentName:"source.swift",end:"(\\))",endCaptures:{0:{name:"punctuation.section.embedded.end.swift"},1:{name:"source.swift"}},name:"meta.embedded.line.swift",patterns:[{include:"$self"},{begin:"\\(",end:"\\)"}]},{match:"\\\\.",name:"invalid.illegal.escape-not-recognized"}]}}}}},operators:{patterns:[{match:"\\b(is\\b|as([!?]\\B|\\b))",name:"keyword.operator.type-casting.swift"},{begin:`(?x)
						(?=
							(?<oph>								# operator-head
								[/=\\-+!*%<>&|^~?]
							  | [\\x{00A1}-\\x{00A7}]
							  | [\\x{00A9}\\x{00AB}]
							  | [\\x{00AC}\\x{00AE}]
							  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
							  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
							  | [\\x{2030}-\\x{203E}]
							  | [\\x{2041}-\\x{2053}]
							  | [\\x{2055}-\\x{205E}]
							  | [\\x{2190}-\\x{23FF}]
							  | [\\x{2500}-\\x{2775}]
							  | [\\x{2794}-\\x{2BFF}]
							  | [\\x{2E00}-\\x{2E7F}]
							  | [\\x{3001}-\\x{3003}]
							  | [\\x{3008}-\\x{3030}]
							)
						  | \\.
							(
								\\g<oph>							# operator-head
							  | \\.
							  | [\\x{0300}-\\x{036F}]				# operator-character
							  | [\\x{1DC0}-\\x{1DFF}]
							  | [\\x{20D0}-\\x{20FF}]
							  | [\\x{FE00}-\\x{FE0F}]
							  | [\\x{FE20}-\\x{FE2F}]
							  | [\\x{E0100}-\\x{E01EF}]
							)
						)
					`,end:"(?!\\G)",patterns:[{captures:{0:{patterns:[{match:"\\G(\\+\\+|\\-\\-)$",name:"keyword.operator.increment-or-decrement.swift"},{match:"\\G(\\+|\\-)$",name:"keyword.operator.arithmetic.unary.swift"},{match:"\\G!$",name:"keyword.operator.logical.not.swift"},{match:"\\G~$",name:"keyword.operator.bitwise.not.swift"},{match:".+",name:"keyword.operator.custom.prefix.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								(?<=^|[\\s(\\[{,;:])
								(
									(?!(//|/\\*|\\*/))
									(
										[/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
								(?![\\s)\\]},;:]|\\z)
							`},{captures:{0:{patterns:[{match:"\\G(\\+\\+|\\-\\-)$",name:"keyword.operator.increment-or-decrement.swift"},{match:"\\G!$",name:"keyword.operator.increment-or-decrement.swift"},{match:".+",name:"keyword.operator.custom.postfix.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								(?<!^|[\\s(\\[{,;:])
								(
									(?!(//|/\\*|\\*/))
									(
										[/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
								(?=[\\s)\\]},;:]|\\z)
							`},{captures:{0:{patterns:[{match:"\\G=$",name:"keyword.operator.assignment.swift"},{match:"\\G(\\+|\\-|\\*|/|%|<<|>>|&|\\^|\\||&&|\\|\\|)=$",name:"keyword.operator.assignment.compound.swift"},{match:"\\G(\\+|\\-|\\*|/)$",name:"keyword.operator.arithmetic.swift"},{match:"\\G&(\\+|\\-|\\*)$",name:"keyword.operator.arithmetic.overflow.swift"},{match:"\\G%$",name:"keyword.operator.arithmetic.remainder.swift"},{match:"\\G(==|!=|>|<|>=|<=|~=)$",name:"keyword.operator.comparison.swift"},{match:"\\G\\?\\?$",name:"keyword.operator.coalescing.swift"},{match:"\\G(&&|\\|\\|)$",name:"keyword.operator.logical.swift"},{match:"\\G(&|\\||\\^|<<|>>)$",name:"keyword.operator.bitwise.swift"},{match:"\\G(===|!==)$",name:"keyword.operator.bitwise.swift"},{match:"\\G\\?$",name:"keyword.operator.ternary.swift"},{match:".+",name:"keyword.operator.custom.infix.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								(
									(?!(//|/\\*|\\*/))
									(
										[/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
							`},{captures:{0:{patterns:[{match:".+",name:"keyword.operator.custom.prefix.dot.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								(?<=^|[\\s(\\[{,;:])
								\\.										# dot
								(
									(?!(//|/\\*|\\*/))
									(
										\\.								# dot
									  | [/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
								(?![\\s)\\]},;:]|\\z)
							`},{captures:{0:{patterns:[{match:".+",name:"keyword.operator.custom.postfix.dot.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								(?<!^|[\\s(\\[{,;:])
								\\.										# dot
								(
									(?!(//|/\\*|\\*/))
									(
										\\.								# dot
									  | [/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
								(?=[\\s)\\]},;:]|\\z)
							`},{captures:{0:{patterns:[{match:"\\G\\.\\.[.<]$",name:"keyword.operator.range.swift"},{match:".+",name:"keyword.operator.custom.infix.dot.swift"}]}},match:`(?x)
								\\G										# Matching from the beginning ensures
																		# that we start with operator-head
								\\.										# dot
								(
									(?!(//|/\\*|\\*/))
									(
										\\.								# dot
									  | [/=\\-+!*%<>&|^~?]				# operator-head
									  | [\\x{00A1}-\\x{00A7}]
									  | [\\x{00A9}\\x{00AB}]
									  | [\\x{00AC}\\x{00AE}]
									  | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]
									  | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]
									  | [\\x{2030}-\\x{203E}]
									  | [\\x{2041}-\\x{2053}]
									  | [\\x{2055}-\\x{205E}]
									  | [\\x{2190}-\\x{23FF}]
									  | [\\x{2500}-\\x{2775}]
									  | [\\x{2794}-\\x{2BFF}]
									  | [\\x{2E00}-\\x{2E7F}]
									  | [\\x{3001}-\\x{3003}]
									  | [\\x{3008}-\\x{3030}]
								  
									  | [\\x{0300}-\\x{036F}]				# operator-character
									  | [\\x{1DC0}-\\x{1DFF}]
									  | [\\x{20D0}-\\x{20FF}]
									  | [\\x{FE00}-\\x{FE0F}]
									  | [\\x{FE20}-\\x{FE2F}]
									  | [\\x{E0100}-\\x{E01EF}]
									)
								)++
							`}]},{match:":",name:"keyword.operator.ternary.swift"}]},root:{patterns:[{include:"#compiler-control"},{include:"#declarations"},{include:"#expressions"}]}},scopeName:"source.swift"},b=o;export{p as a,l as b,d as c,m as d,g as e,b as f,c as g,u as s};
