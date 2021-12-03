async function awaitNotThenable() {
    await 'not-thenable'
}

awaitNotThenable()
