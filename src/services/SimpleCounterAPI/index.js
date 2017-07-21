// fake api service
class SimpleCounterAPI {
    static fetchInitialValue() {
        return new Promise(resolve => setTimeout(() => resolve(42), 1000));
    };
}

export default SimpleCounterAPI;
