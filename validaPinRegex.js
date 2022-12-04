function validatePIN (pin) {
    let re = /^(?=(?:.{4}|.{6})$)[0-9]*$/
    let validate = (re.test(pin))
    if (validate == true) {
        return true
    } else return false
  }

  console.log(validatePIN('-12'))