async function fetchPosts() {
  const response = await fetch("https://www.reddit.com/r/reactjs.json")
  const data1 = await response.json();
  const myReddit = data1.data.children.map(obj => obj.data);

  return myReddit
}

export default function createResource() {
  let status = "loading"
  let result
  let suspender = fetchPosts().then(
    data => {
      status = "success"
      result = data
    },
    error => {
      status = "error"
      result = error
    }
  )

  return {
    read() {
      if (status === "loading") {
        throw suspender
      } else if (status === "error") {
        throw result
      } else if (status === "success") {
        return result
      }
    }
  }
}