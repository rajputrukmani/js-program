<script>
    var arr = [1, 2, 3, 4, 5];
    var start = 0;
    var end = arr.length-1;
    var found = false
    while (start != end) {
        let mid = (start + end) / 2
        if (arr[mid] === 2) {
            found = true
            break;
        }
        else if (arr[mid] > 2) {
            end = mid
        }
        else {
            start = mid
        }
    }

    if (found) {
        document.write("found")
    }
    else {
        document.write(" not found")

    }
</script>
