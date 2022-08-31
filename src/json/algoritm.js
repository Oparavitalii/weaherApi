
const findCity = (arr,val) => {
    let start = 0;
    let end = arr.length;
    let mid;
    while(start <= end) {
        mid = Math.floor((start+end)/2);
        if(val = arr[mid]) {
            return arr[mid]
        } else if (val > arr[mid]) {
            start = mid+1
        } else {
            end = mid-1
        }
    }
    return false
}

export default findCity;