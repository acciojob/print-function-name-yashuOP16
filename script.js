function functionName() {
    console.log(arguments.callee.name);
}

functionName();
