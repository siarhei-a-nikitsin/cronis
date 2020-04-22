const sortAscStack = (stack) => {
    if(!stack || !stack.length){
        return stack;
    }

    const tempStack = [];

    while(stack.length > 0){
        const el = stack.pop();

        if(!tempStack.length){
            tempStack.push(el);
        } else {
            let tempEl = tempStack.pop();
            if(el >= tempEl){
                tempStack.push(tempEl);
                tempStack.push(el);
            } else {
                while(tempStack.length || el < tempEl){
                    stack.push(tempEl);
                    tempEl =  tempStack.pop();
                }
                if(tempEl !== undefined){
                    tempStack.push(tempEl);
                }
                tempStack.push(el);
            }
        }
    }

    while(tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
};

