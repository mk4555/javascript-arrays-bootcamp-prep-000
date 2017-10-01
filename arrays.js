var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, ele) {
  arr = [ele, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
  return arr
}
function addElementToEndOfArray(arr, ele) {
  var modified = [...arr,ele]
  return modified
}
function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
  return arr
}
function accessElementInArray(arr, ele){
  return arr[ele]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var modified = arr.slice(1)
  return modified
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var modified = arr.slice(arr.length-1)
  return modified
}
