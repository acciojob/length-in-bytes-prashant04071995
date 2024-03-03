const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size property of the Blob object
  return blob.size;
};

// Example usage:
const str = prompt("Enter some string.");
alert(byteSize(str));
