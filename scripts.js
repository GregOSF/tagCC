console.log("Hello world");



$(function(){

	var products = {
	1: {
	    id : 1,
	    order: 1,
	    'title' : 'Product Title 1',
	    'priceDesc' : 'Staring at $500',
	    'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
	    'feature1' : 'Non porta dui euismod nec',
	    'feature2' : 'Ut tristique ipsum velit',
	    'feature3' : 'Quisque mollis justo',
	    'feature4' : 'Nullam non massa in lorem',
	    'feature5' : 'Phasellus venenatis ultrices justo',
	    'feature6' : 'uisque mollis justo quis commodo',
	    'img'   : '/assets/images/cereal_b.jpg',
	    'src'   : 'material/000010885.jpg'
	},
	2: {
	    id : 2,
	    order: 2,
	    'title' : 'Product Title 2',
	    'priceDesc' : 'Staring at $1900',
	    'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.',
	    'feature1' : 'Mauris sed enim risus',
	    'feature2' : 'Quisque mollis justo quis commodo euismod',
	    'feature3' : 'Nullam non massa in lorem cursus sagittis',
	    'feature4' : 'Sed laoreet felis mauris, a eleifend sapien molestie eget',
	    'feature5' : 'Duis at volutpat elit',
	    'feature6' : 'Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus',
	    'img'   : '/assets/images/flower_b.jpg',
	    'src'   : 'material/ff_x20_008.JPG'
	},
	3: {
	    id : 3,
	    order: 3,
	    'title' : 'Product Title 3',
	    'priceDesc' : 'Staring at $2730',
	    'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.',
	    'feature1' : 'Mauris sed enim risus',
	    'feature2' : 'Quisque mollis justo quis commodo euismod',
	    'feature3' : 'Nullam non massa in lorem cursus sagittis',
	    'feature4' : 'Sed laoreet felis mauris, a eleifend sapien molestie eget',
	    'feature5' : 'Duis at volutpat elit',
	    'feature6' : 'Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus',
	    'img'   : 'assets/images/machine_b.jpg',
	    'src'   : 'material/sample1.jpg'
	},
	4: {
	    id : 4,
	    order: 4,
	    'title' : 'Product Title 3',
	    'priceDesc' : 'Staring at $731',
	    'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.',
	    'feature1' : 'Mauris sed enim risus',
	    'feature2' : 'Quisque mollis justo quis commodo euismod',
	    'feature3' : 'Nullam non massa in lorem cursus sagittis',
	    'feature4' : 'Sed laoreet felis mauris, a eleifend sapien molestie eget',
	    'feature5' : 'Duis at volutpat elit',
	    'feature6' : 'Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus',
	    'img'   : '/assets/images/candy_b.jpg',
	    'src'   : 'material/sample_08.jpg'
	}
	};

	// Get the modal
	$('#productModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var product = button.data('id') // Extract info from data-* attributes
  console.log(product)
  console.log(products[product].title)
  console.log(product)
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(products[product].title)
  modal.find('.modal-priceDesc').text(products[product].priceDesc)
  modal.find('.modal-desc').text(products[product].desc)
  modal.find('.modal-img').text(products[product].img)
  modal.find('.modal-body input').val(product)
  $(".modal-img").attr("src", products[product].img);
})




});