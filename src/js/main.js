document.addEventListener('DOMContentLoaded', () => {

// select

    const selectParent = document.querySelectorAll(".select");
        
    selectParent.forEach( item => {
        const selectField = item.querySelector(".select__field"),
            selectList = item.querySelector("ul");
        item.addEventListener('click', () => {
            if(selectField.classList.contains('open')) {
                selectField.classList.remove("open");
                selectList.classList.remove("open");
            } else {
                selectField.classList.add("open");
                selectList.classList.add("open");
            }
        });
    });
    
// attach icons animation

    const attachIcon = document.querySelector(".chat__attach-icon"),
        attachIconsGroup = document.querySelector(".chat__attach-icons");

    attachIcon.addEventListener('click', (event) => {
        event.preventDefault();
        if(attachIconsGroup.classList.contains('open')) {
            attachIconsGroup.classList.remove("open");
        } else {
            attachIconsGroup.classList.add("open");
        }
    });

// modal

    const popupBtn = document.querySelectorAll(".js-popup-btn"),
        popup = document.querySelector(".popup"),
        popupCloseBtn = document.querySelector(".popup__close");

    popupBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popup.style.display = "block";
        });
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

// create new chat

    const createChatBtn = document.querySelector(".js-create-chat"),
        chatsParent = document.querySelector(".columns__chats"),
        chatPreview = document.querySelectorAll(".chat-preview");

    createChatBtn.addEventListener('click', () => {
        let chatPreviewClone = chatPreview[0].cloneNode(true),
            chatPreviewCloneName = chatPreviewClone.querySelector(".chat-preview__name"),
            chatPreviewCloneStatus = chatPreviewClone.querySelector(".chat-preview__status"),
            chatPreviewCloneLastMes = chatPreviewClone.querySelector(".chat-preview__last-mes"),
            chatPreviewCloneMes = chatPreviewClone.querySelector(".chat-preview__mes-line"),
            chatPreviewCloneAttachments = chatPreviewClone.querySelector(".chat-preview__attachments");
        
        chatPreviewCloneName.innerHTML = "New person name";
        chatPreviewCloneStatus.innerHTML = "New person status";
        chatPreviewCloneLastMes.remove();
        chatPreviewCloneMes.remove();
        chatPreviewCloneAttachments.remove();

        chatsParent.prepend(chatPreviewClone);
        popup.style.display = "none";
    });
});