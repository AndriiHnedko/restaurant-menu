const getHeader = () => {
    return `
          <header>
              <nav>
                <div class="nav-wrapper">
                  <a href="#!" class="brand-logo center">Logo</a>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
              </nav>
            
              <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
          </header>
    `
}

const logicHeader = () => {

    // materialize scripts
    document.addEventListener('DOMContentLoaded', () => {
        let elems = document.querySelectorAll('.sidenav')
        let instances = M.Sidenav.init(elems)
    })

}

export {getHeader, logicHeader}