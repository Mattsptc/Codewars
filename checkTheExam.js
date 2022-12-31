function checkExam(array1, array2) {
    let count = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            count+=4
        }
        else if (array1[i] !== array2[i] && array2[i] !== '') {
            count-=1
        } else if (array2[i] == '') {
            count+=0
        }
    } if (count < 0) {
        return 0
    } else {
        return count
    }
   }


   console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
   console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
   console.log(checkExam(["a", "a", "b", "c"], ["", "", "", ""]), 0);
   console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
   console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  