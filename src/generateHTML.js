// create boilerplate html
function generateHTML(data) {
return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
  <link rel="stylesheet" href="https://jenil.github.io/bulmaswatch/superhero/bulmaswatch.min.css">
  <link ref="stylesheet" href="./assets/css/style.css">
  <title>My Team</title>
</head>
<body>
  <!-- Hero -->
  <section class="hero container is-dark">
    <div class="hero-body has-text-centered">
      <p class="title is-2">
        My Team
      </p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-multiline">
        ${generateCards(data)}
      </div>
    </div>
  </section>
</body>
</html>
`;
};

// generate cards based on getRole() 
function generateCards(data) {
  return data
    .map(dataRole => {
      let role = dataRole.getRole();
      switch (role) {
        case "Manager":
          return generateManager(dataRole);
          break;
        case "Engineer":
          return generateEngineer(dataRole);
          break;
        case "Intern":
          return generateIntern(dataRole);
          break;
    }
  })
  .join('\n');
};

// create a manager card
function generateManager(data) {
  console.log(data);
    return `
<div class="card column is-one-third m-2">
  <header class="card-header">
    <p class="card-header-title">
      ${data.name}
      <br>
      ${data.role}
    </p>
  </header>
  <div class="card">
    <div class="card-content">
      <!-- Content -->
      <div class="content">
      <p>
      ID: ${data.id}<br>
      Email: <a href="mailto:${data.email}">${data.email}</a><br>
      Office#: ${data.officeNumber}
      </p>
      </div>
    </div>
  </div>
</div>
`;
};

// create an engineer card
function generateEngineer(data){
console.log(data);
  return `
<div class="card column is-one-third m-2">
  <header class="card-header">
    <p class="card-header-title">
      ${data.name}
      <br>
      ${data.role}
    </p>
  </header>
  <div class="card">
    <div class="card-content">
      <!-- Content -->
      <div class="content">
      <p>
      ID: ${data.id}<br>
      Email: <a href="mailto:${data.email}">${data.email}</a><br>
      Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a>
      </p>
      </div>
    </div>
  </div>
</div>
  `;
};

// create an intern card
function generateIntern(data) {
console.log(data);
return `
<div class="card column is-one-third m-2">
  <header class="card-header">
    <p class="card-header-title">
      ${data.name}
      <br>
      ${data.role}
    </p>
  </header>
  <div class="card">
    <div class="card-content">
      <!-- Content -->
      <div class="content">
      <p>
      ID: ${data.id}<br>
      Email: <a href="mailto:${data.email}">${data.email}</a><br>
      School: ${data.school}
      </p>
      </div>
    </div>
  </div>
</div>
`;
};

module.exports = generateHTML; 