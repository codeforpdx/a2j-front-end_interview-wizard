
export const ProgressNodes = [

	{
	name: 'Petitioner Details',
	label: 'Please enter your personal information below',
	correspondingStep: 'personals',
 	questions: [
      {
        id: 'petitioner_first_name',
        label: 'First name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_middle_name',
        label: 'Middle Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_last_name',
        label: 'Last Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_maiden_name',
        label: 'Maiden Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_dob',
        label: 'Date of Birth',
        type: 'date',
        validators: [],
        hidden: true
      },
      {
        id: 'petitioner_ssn',
        label: 'Social Security Number',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_dob',
        label: 'Driver\'s License #',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_drivers_license',
        label: 'Nickname',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_nickname',
        label: 'If you have another name you prefer to be referred to as, please list it here.',
        type: 'text',
        validators: [],
      }
    ]
	},

	


]