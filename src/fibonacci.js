function Fib() {
    
    function showFib() {
        function check_fib() {
            
            let arr = [0,1]
            for (let i = 2; i <= 5; i++) {
                arr.push(arr[i-1] + arr[i-2])
            }

            return arr
        }
        alert("First 5 fibonacci numbers are "+check_fib())
    }
    return (
        <div>
            <button onClick={showFib}>First 5 Fibonacci number</button>
        </div>
        )
}

export default Fib;