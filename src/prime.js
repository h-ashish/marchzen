function Prime() {
    
    function showPrime() {
        function isPrime(num) {
            for (let i = 2; i < num; i++) {
                if (num%i === 0) {
                    return false
                }
            }
            return num > 1
        }

        let sm = 0;
        for (let i = 0; i <= 11; i++) {
            if (isPrime(i)) {
                sm += i;
            }
        }
        alert("Sum of first 5 prime number is "+sm)
    }
    return (
        <div>
            <button onClick={showPrime}>Sum of first 5 prime numbers</button>
        </div>
        )
}

export default Prime;