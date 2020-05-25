let viewFile = require("./command/viewFile");
let untreefyFile = require("./command/untreefyFile");
let treefyFile = require("./command/treefyFile");
let helpFile = require("./command/treefyFile");
let input = process.argv.slice(2);
// console.log(input); 
//node  tpp view src -t
//node  tpp view src -f
// node tpp untreefy src dest

// console.log(input);
// untreefy src dest
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFile.view(input[1], input[2]);
        break;
    case "treefy":
        treefyFile.treefy();
        break;
    case "untreefy":
        untreefyFile.untreefy(input[1], input[2]);
        break;
    case "help":
        helpFile.help();
        break;
    default:
        console.log("Wrong command");
        break;
}
