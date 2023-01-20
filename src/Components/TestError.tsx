const TestError = () => {
    return (
        <button
        type="button"
        onClick={() => {
          throw Error("Opps Frontend Error");
        }}
      >
        Throw error
      </button>
    )
}

export default TestError