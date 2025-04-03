// Sai Sreekar Jakku
// ITMD 541-01 Graduate Student

(function() {
    // Requirement 1: Update the hero section's main headline
    const mainTitle = document.querySelector('#hero h1');
    if (mainTitle) {
        mainTitle.innerText = 'Uplift Your Brand with Stellar Marketing';
        console.log('Main title updated successfully');
    } else {
        console.error('Error: Could not find the hero headline with selector #hero h1');
    }

    // Requirement 2: Update the hero section's subtext with bold and italic formatting
    const subTitle = document.querySelector('#hero p');
    if (subTitle) {
        subTitle.innerHTML = 'Utilize cutting-edge strategies from <strong><em>Stellar Marketing</em></strong> to help your business thrive and excel.';
        console.log('Subtext updated successfully');
    } else {
        console.error('Error: Could not find the hero subtext with selector #hero p');
    }

    // Requirement 3: Change the hero section's background image
    const heroArea = document.querySelector('#hero');
    if (heroArea) {
        heroArea.style.setProperty('background-image', 'url("https://picsum.photos/id/683/1280/720")');
        heroArea.style.setProperty('background-size', 'cover');
        heroArea.style.setProperty('background-position', 'center');
        console.log('Hero background image changed successfully');
    } else {
        console.error('Error: Could not find the hero section with selector #hero');
    }

    // Requirement 4: Set the nav bar background color to match the footer
    const pageFooter = document.querySelector('footer');
    const pageNav = document.querySelector('nav');
    if (pageFooter && pageNav) {
        const footerBg = getComputedStyle(pageFooter).getPropertyValue('background-color');
        pageNav.style.backgroundColor = footerBg;
        console.log('Nav bar background color set to match footer:', footerBg);
    } else {
        console.error('Error: Could not find nav or footer elements');
    }

    // Requirement 5: Remove the "Get Started" CTA button from the hero section
    const heroCta = document.querySelector('#hero a');
    if (heroCta) {
        heroCta.parentNode.removeChild(heroCta);
        console.log('Hero CTA button removed successfully');
    } else {
        console.warn('Warning: Hero CTA button not found with selector #hero a');
    }

    // Requirement 6: Center-align the headings of the Services, Solutions, and Contact sections
    const headingsToCenter = document.querySelectorAll('section h2');
    if (headingsToCenter.length > 0) {
        headingsToCenter.forEach(heading => {
            heading.style.setProperty('text-align', 'center');
        });
        console.log(`Centered ${headingsToCenter.length} section headings`);
    } else {
        console.error('Error: No section headings found with selector section h2');
    }

    // Requirement 7: Change the color of icons in the services section to #47C714
    const iconsInServices = document.querySelectorAll('.material-symbols-outlined');
    if (iconsInServices.length > 0) {
        iconsInServices.forEach(icon => {
            icon.style.setProperty('color', '#47C714');
        });
        console.log(`Updated color for ${iconsInServices.length} service icons`);
    } else {
        console.error('Error: No service icons found with selector .material-symbols-outlined');
    }

    // Requirement 8: Change the digital marketing icon to "Ads Click"
    const digitalIcon = document.querySelector('[data-icon="digital"]');
    if (digitalIcon) {
        const newIcon = document.createElement('span');
        newIcon.className = 'material-symbols-outlined text-6xl';
        newIcon.textContent = 'ads_click';
        digitalIcon.innerHTML = '';
        digitalIcon.appendChild(newIcon);
        console.log('Digital marketing icon updated to "ads_click"');
    } else {
        console.error('Error: Digital marketing icon not found with selector [data-icon="digital"]');
    }

    // Requirement 9: Update the layout of tiles in the specialized marketing solutions section to 4 columns at >= 1024px
    const solutionsArea = document.querySelector('[data-section="product_cards"]');
    if (solutionsArea) {
        const cssRules = document.createElement('style');
        cssRules.innerHTML = `
            @media screen and (min-width: 1024px) {
                [data-section="product_cards"] {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 1rem;
                }
            }
            @media screen and (max-width: 1023px) {
                [data-section="product_cards"] {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(cssRules);
        console.log('Specialized marketing solutions layout updated for >= 1024px');
    } else {
        console.error('Error: Specialized marketing solutions section not found with selector [data-section="product_cards"]');
    }

    // Requirement 10: Change the Musicians image in the specialized marketing solutions section
    const musiciansImg = document.querySelector('[alt="Musicians"]');
    if (musiciansImg) {
        musiciansImg.setAttribute('src', 'https://picsum.photos/id/453/400/300');
        musiciansImg.setAttribute('alt', 'Musicians');
        console.log('Musicians image updated successfully');
    } else {
        console.error('Error: Musicians image not found with selector [alt="Musicians"]');
    }

    // Graduate Requirement: Handle form submission to prevent navigation and show alerts
    const contactForm = document.querySelector('form[action="contact.html"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop the form from submitting to the broken URL

            const userName = document.querySelector('#name');
            const userEmail = document.querySelector('#email');

            if (userName && userEmail) {
                const nameValue = userName.value.trim();
                const emailValue = userEmail.value.trim();

                if (nameValue && emailValue) {
                    window.alert(`Thank you, ${nameValue}! We will be in touch with you shortly at ${emailValue}.`);
                    console.log('Form submission handled: Name:', nameValue, 'Email:', emailValue);
                } else {
                    window.alert('Please provide a name and email.');
                    console.warn('Form submission failed: Missing name or email');
                }
            } else {
                console.error('Error: Form inputs not found with selectors #name, #email');
            }
        });
        console.log('Form submission handler attached successfully');
    } else {
        console.error('Error: Contact form not found with selector form[action="contact.html"]');
    }

    // Final console output to confirm script execution
    console.log('Script execution completed. All modifications applied.');
})();