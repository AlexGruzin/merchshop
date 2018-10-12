const NODE_ENV = process.env.NODE_ENV;

let API_URL;

if ( !NODE_ENV && NODE_ENV === 'production' ) {

} else {
  API_URL = 'http://localhost:3010';
}

export { API_URL };
