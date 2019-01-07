const cacheMethod = (contractMethod, typeOfCache, self) => {
    const { drizzle, drizzleState } = self.props;
    const contract = drizzle.contracts.BagCount;

    if (typeOfCache === "call") {
        const dataKey = contract.methods[contractMethod].cacheCall();
        return dataKey;
    }

    if (typeOfCache === "send") {
        const stackId = contract.methods[contractMethod].cacheSend({
            from: drizzleState.accounts[0]
            });
        return stackId; 
    }
}

export { cacheMethod };