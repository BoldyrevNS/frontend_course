function degree_of_two() {
    let i = 9
    if (!(i & (i - 1))) {
        return true
    } else {
        return false
    }
}

degree_of_two();