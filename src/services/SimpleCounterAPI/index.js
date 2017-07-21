// fake api service
class SimpleCounterAPI {
    static fetchInitialValue() {
        return new Promise(resolve => setTimeout(() => resolve(42), 500));
    };
}

export default SimpleCounterAPI;
