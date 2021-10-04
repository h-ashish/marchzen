function SumOfPrime(){
    function PrimeSum() {
        function isPrime(num) {
            for (let i = 2; i < num; i++) {
                if (num%i === 0) {
                    return false
                }
            }
            return num > 1
        }
        let arr =  [];
        for (let i = 0; i < 200; i++) {
            if (isPrime(i)) {
                arr.push(i)
            }
        }

        let numId = document.getElementById('input').value;

        let sm = 0;
        for (let i = 0; i < numId; i++) {
            sm += arr[i];
        }

        document.getElementById('op').innerHTML = `Sum of first ${numId} prime numbers are ${sm} .`;
    }
    return(
        <div>
            <input type="number" id="input" placeholder="Enter a number"/>
            <button onClick={PrimeSum} >Find sum of prime</button>
            <div id="op"></div>
        </div>
    )
}
export default SumOfPrime;