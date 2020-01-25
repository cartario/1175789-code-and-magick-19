'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор стрендж', 'Гарри Поттер'];

var wizards = [
  {name: WIZARD_NAMES[0], coatColor: 'rgba(241, 43, 107)', eyesColor: 'black'},
  {name: WIZARD_NAMES[1], coatColor: 'rgba(215, 210, 55)', eyesColor: 'red'},
  {name: WIZARD_NAMES[2], coatColor: 'rgba(101, 137, 164)', eyesColor: 'blue'},
  {name: WIZARD_NAMES[3], coatColor: 'rgba(127, 127, 127)', eyesColor: 'green'}];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {


  similarListElement.appendChild(renderWizard(wizards[i]));
}

document.querySelector('.setup-similar').classList.remove('hidden');
