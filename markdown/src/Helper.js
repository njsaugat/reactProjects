function GetHeadingTag(text) {
  return <h1>{text}</h1>;
}

function findIndexOf(array, element) {
  return array.findIndex((ele) => ele === element);
}

export default function checkText(text) {
  const textArr = text.split('');
  const hashIndex = findIndexOf(textArr, '#');
  const copyArr = [...textArr];
  const lineBreakIndexReversed = findIndexOf(copyArr.reverse(), '\n');
  const lineBreakIndex = textArr.length - lineBreakIndexReversed - 1;
  console.log(textArr);
  //   console.log(lineBreakIndex);
  console.log(lineBreakIndex);
  if (textArr[hashIndex + 1] === ' ') {
    textArr.splice(hashIndex, 2);
    let textUpdated = textArr.slice(hashIndex, lineBreakIndex).join('');
    return GetHeadingTag(textUpdated);
  }
  return text;
}
