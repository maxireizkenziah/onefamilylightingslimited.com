


 // When the page loads
  document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Find the next sibling (the .myDIV related to this button)
        const content = this.nextElementSibling;

        // Toggle display
        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
          this.textContent = "Show Less";
        } else {
          content.style.display = "none";
          this.textContent = "View More";
        }
      });
    });
  });

const products = document.querySelectorAll('.pro');
  const totalProducts = products.length;
  const totalPages = 3; // Fixed to 3 pages
  const pagination = document.getElementById('pagination');

  // Split evenly across 3 pages
  const productsPerPage = Math.ceil(totalProducts / totalPages);

  function showPage(page) {
    products.forEach((product, index) => {
      product.style.display = (index >= (page - 1) * productsPerPage && index < page * productsPerPage)
        ? 'block' : 'none';
    });

    document.querySelectorAll('#pagination a').forEach((a, i) => {
      a.classList.toggle('active', i + 1 === page);
    });
  }

  function setupPagination() {
    for (let i = 1; i <= totalPages; i++) {
      let btn = document.createElement('a');
      btn.textContent = i;
      btn.href = "#";
      btn.onclick = (e) => {
        e.preventDefault();
        showPage(i);
      };
      pagination.appendChild(btn);
    }
  }

  setupPagination();
  showPage(1); // Show first page by default

  