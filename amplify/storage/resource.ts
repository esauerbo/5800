import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'storageDrive',
    access: (allow) => ({
      'view-pictures/{entity_id}/*': [
        allow.guest.to(['read']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'pictures/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    })
  })