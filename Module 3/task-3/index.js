class Stack {
    NUMBER_STACKS = 3;

    constructor(){
        this.stack = [];
        for(let i = 0; i < this.NUMBER_STACKS; i++) {
            this.stack.push([])
        }
    }

    getStack(stackIndex){
        return this.stack[stackIndex];
    }

    push(stackIndex, value) {
        const stack = this.getStack(stackIndex);

        stack.push(value);
    }

    pop(stackIndex){
        const stack = this.getStack(stackIndex);

        return stack.pop();
    }

    peek(stackIndex){
        const stack = this.getStack(stackIndex);

        let peek;

        if(!this.isEmpty()){
            peek = stack[stack.length - 1];
        }

        return peek;
    }

    isEmpty(stackIndex){
        const stack = this.getStack(stackIndex);

        return !stack.length;
    }
}
