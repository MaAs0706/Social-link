const socialButtons = document.querySelectorAll('.social-btn');
        socialButtons.forEach(button => {
            button.addEventListener('click', ()=>change(button)) 
                
        });

        function change(button){
            const Url = button.getAttribute('url');
            if(Url){
            window.open(Url, '_blank', 'noopener,noreferrer');
            }
            else{
                console.error('No Url found')
            }
        }