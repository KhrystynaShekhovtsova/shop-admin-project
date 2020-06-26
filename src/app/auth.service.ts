export class AuthService {
  loggedIn = false;

  isAuthentificated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    console.log('logged In');
  }

  logout() {
    this.loggedIn = false;
    console.log('logged OUT');
  }
}
