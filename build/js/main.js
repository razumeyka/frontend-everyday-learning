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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4vLyBzZWxlY3RcclxuXHJcbiAgICBjb25zdCBzZWxlY3RQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKTtcclxuICAgICAgICBcclxuICAgIHNlbGVjdFBhcmVudC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RGaWVsZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RfX2ZpZWxkXCIpLFxyXG4gICAgICAgICAgICBzZWxlY3RMaXN0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoc2VsZWN0RmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuLy8gYXR0YWNoIGljb25zIGFuaW1hdGlvblxyXG5cclxuICAgIGNvbnN0IGF0dGFjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXRfX2F0dGFjaC1pY29uXCIpLFxyXG4gICAgICAgIGF0dGFjaEljb25zR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXRfX2F0dGFjaC1pY29uc1wiKTtcclxuXHJcbiAgICBhdHRhY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihhdHRhY2hJY29uc0dyb3VwLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgIGF0dGFjaEljb25zR3JvdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXR0YWNoSWNvbnNHcm91cC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbi8vIG1vZGFsXHJcblxyXG4gICAgY29uc3QgcG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXBvcHVwLWJ0blwiKSxcclxuICAgICAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIiksXHJcbiAgICAgICAgcG9wdXBDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xyXG5cclxuICAgIHBvcHVwQnRuLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwb3B1cENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XHJcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbi8vIGNyZWF0ZSBuZXcgY2hhdFxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNoYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNyZWF0ZS1jaGF0XCIpLFxyXG4gICAgICAgIGNoYXRzUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2x1bW5zX19jaGF0c1wiKSxcclxuICAgICAgICBjaGF0UHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdC1wcmV2aWV3XCIpO1xyXG5cclxuICAgIGNyZWF0ZUNoYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoYXRQcmV2aWV3Q2xvbmUgPSBjaGF0UHJldmlld1swXS5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICAgICAgICAgIGNoYXRQcmV2aWV3Q2xvbmVOYW1lID0gY2hhdFByZXZpZXdDbG9uZS5xdWVyeVNlbGVjdG9yKFwiLmNoYXQtcHJldmlld19fbmFtZVwiKSxcclxuICAgICAgICAgICAgY2hhdFByZXZpZXdDbG9uZVN0YXR1cyA9IGNoYXRQcmV2aWV3Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5jaGF0LXByZXZpZXdfX3N0YXR1c1wiKSxcclxuICAgICAgICAgICAgY2hhdFByZXZpZXdDbG9uZUxhc3RNZXMgPSBjaGF0UHJldmlld0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdC1wcmV2aWV3X19sYXN0LW1lc1wiKSxcclxuICAgICAgICAgICAgY2hhdFByZXZpZXdDbG9uZU1lcyA9IGNoYXRQcmV2aWV3Q2xvbmUucXVlcnlTZWxlY3RvcihcIi5jaGF0LXByZXZpZXdfX21lcy1saW5lXCIpLFxyXG4gICAgICAgICAgICBjaGF0UHJldmlld0Nsb25lQXR0YWNobWVudHMgPSBjaGF0UHJldmlld0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdC1wcmV2aWV3X19hdHRhY2htZW50c1wiKTtcclxuICAgICAgICBcclxuICAgICAgICBjaGF0UHJldmlld0Nsb25lTmFtZS5pbm5lckhUTUwgPSBcIk5ldyBwZXJzb24gbmFtZVwiO1xyXG4gICAgICAgIGNoYXRQcmV2aWV3Q2xvbmVTdGF0dXMuaW5uZXJIVE1MID0gXCJOZXcgcGVyc29uIHN0YXR1c1wiO1xyXG4gICAgICAgIGNoYXRQcmV2aWV3Q2xvbmVMYXN0TWVzLnJlbW92ZSgpO1xyXG4gICAgICAgIGNoYXRQcmV2aWV3Q2xvbmVNZXMucmVtb3ZlKCk7XHJcbiAgICAgICAgY2hhdFByZXZpZXdDbG9uZUF0dGFjaG1lbnRzLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBjaGF0c1BhcmVudC5wcmVwZW5kKGNoYXRQcmV2aWV3Q2xvbmUpO1xyXG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
