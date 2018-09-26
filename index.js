var katzDeliLine = [];

function takeANumber(current, person){
  current.push(person)
  return(`Welcome, ${person}. You are number ${current.length} in line.`)
}

function nowServing(current){
  if (current.length() === 0) {
    return "There is nobody waiting to be served!"
  }
  else{
    
  }
}