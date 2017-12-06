n package.jason

to be able to communicate between from end and back end local host7000 (express) and localhost 3000(web pack) we need to use “proxy” in package jason:

“proxy”: “http://localhost:7000”


componentDitMount() {
fetch (‘/movie’)
.then(res=> res.
