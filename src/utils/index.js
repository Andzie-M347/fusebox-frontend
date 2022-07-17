// Format Date
export const formatDate = date => {
    var yyyy = date.getFullYear()
    var mm = date.getMonth() + 1 // getMonth() is zero-based
    var dd = date.getDate()
    return String(10000 * yyyy + 100 * mm + dd) // Leading zeros for mm and dd
}
