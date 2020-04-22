class Stack {
    ONE_STACK_SIZE = 3;
    stack = [[]];

    getLastBucket = () => {
        return this.stack[this.stack.length - 1];
    };

    push = (val) => {
        const lastBucket = this.getLastBucket();

        lastBucket.push(val);

        if(lastBucket.length === this.ONE_STACK_SIZE){
            this.stack.push([]); // add empty backet
        }
    };
    pop = () => {
        const lastBucket = this.getLastBucket();

        const result = lastBucket.pop();

        if(!lastBucket.length && this.stack.length > 1){
            this.stack.pop(); // remove empty last backet
        }

        return result;
    };
}
