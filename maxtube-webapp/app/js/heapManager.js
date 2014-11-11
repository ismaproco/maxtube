// Create the heap manager, with the put and pop operations
function Heap()
{
	var elements = [];

	return {
		put: function(node){
			elements.push(node)
		},
        get: function()
        {
            if(elements.length == 0)
            {
                return null;
            }
            else
            {
                var node = elements[0];
                elements.splice(0,1);
                return node;
            }
        },
        count: function()
        {
            return elements.length;
        }
	}
}