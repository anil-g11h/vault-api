import * as Joi from 'joi';
import {vaultResponseSchema, vaultCmdResponseSchema} from './vault-response-schema';

export const vaultKv2CmdResponseSchema = vaultCmdResponseSchema.keys({
    data: Joi.object({
        data: Joi.object().required(),
        metadata: Joi.object({
            created_time: Joi.string().isoDate().required(),
            deletion_time: Joi.string().isoDate().allow('').required(),
            destroyed: Joi.boolean().required(),
            version: Joi.number().required(),
            custom_metadata: Joi.object().required().allow(null),
        }).unknown(true).required(),
    }).unknown(true).required(),
}).unknown(true);

export const KVv2ConfigSchema = vaultResponseSchema.keys({
    data: Joi.object({
        cas_required: Joi.boolean(),
        delete_version_after: Joi.string(),
        max_versions: Joi.number()
    }).unknown(true)
}).unknown(true);

export const KVv2ReadSchema = vaultResponseSchema.keys({
    metadata: Joi.object({
        created_time: Joi.string().isoDate().required(),
        deletion_time: Joi.string().isoDate().allow('').required(),
        destroyed: Joi.boolean().required(),
        version: Joi.number().required(),
        custom_metadata: Joi.object().required().allow(null),
    }).unknown(true)
}).unknown(true);

export const KVv2WriteSchema = vaultResponseSchema.keys({
    data: Joi.object({
        created_time: Joi.string().isoDate().required(),
        deletion_time: Joi.string().isoDate().allow('').required(),
        destroyed: Joi.boolean().required(),
        version: Joi.number().required(),
        custom_metadata: Joi.object().required().allow(null),
    }).unknown(true),
    statusCode: Joi.number().valid(200).required()
}).unknown(true);

export const KVv2ListSchema = vaultResponseSchema.keys({
    data: Joi.object({
        keys: Joi.array().required(),
    }).unknown(true),
}).unknown(true);

export const KVv2ReadMetadataCmdSchema = vaultCmdResponseSchema.keys({
    data: Joi.object({
        cas_required: Joi.boolean().required(),
        created_time: Joi.string().isoDate().required(),
        current_version: Joi.number().required(),
        delete_version_after: Joi.string().required(),
        max_versions: Joi.number().required(),
        oldest_version: Joi.number().required(),
        updated_time: Joi.string().isoDate().required(),
        versions: Joi.object().pattern(Joi.number(), {
            created_time: Joi.string().isoDate().required(),
            deletion_time: Joi.string().isoDate().allow('').required(),
            destroyed: Joi.boolean().required(),
        }).unknown(true).required(),
        custom_metadata: Joi.object().required().allow(null),
    }).unknown(true),
}).unknown(true);

export const KVv2ReadMetadataSchema = vaultResponseSchema.keys({
    data: Joi.object({
        cas_required: Joi.boolean().required(),
        created_time: Joi.string().isoDate().required(),
        current_version: Joi.number().required(),
        delete_version_after: Joi.string().required(),
        max_versions: Joi.number().required(),
        oldest_version: Joi.number().required(),
        updated_time: Joi.string().isoDate().required(),
        versions: Joi.object().pattern(Joi.number(), {
            created_time: Joi.string().isoDate().required(),
            deletion_time: Joi.string().isoDate().allow('').required(),
            destroyed: Joi.boolean().required(),
        }).unknown(true).required(),
        custom_metadata: Joi.object().required().allow(null),
    }).unknown(true),
}).unknown(true);
