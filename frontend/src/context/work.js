//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//   }, [state.user]);

user: JSON.parse(localStorage.getItem("user")) || null,