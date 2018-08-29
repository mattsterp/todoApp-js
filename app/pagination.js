var el = document.getElementById('pagination');

var pagination = {
	currentPage: 1,
	pageLength: 10,
	totalRecords: 50,
	render: function() {
		this.totalRecords = todoService.getTodosCount();
		let pages = Math.ceil(this.totalRecords / this.pageLength);
		this.pages = pages;
		let buttons = '';
		buttons += `
      <button class='pagination-btn prev'
        type="button">
        prev
      </button>
    `;
		buttons += `
      <button class='pagination-btn next'
        type="button">
        next
      </button>
    `;

		el.innerHTML = buttons;
	}
};

pagination.render();
