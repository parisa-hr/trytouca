/**
 * Copyright 2018-2020 Pejman Ghorbanzade. All rights reserved.
 */

import { ECommentType } from '@weasel/types/backendtypes'
import mongoose from 'mongoose'

/**
 *
 */
const commentSchema = new mongoose.Schema(
  {
    at: {
      required: true,
      type: Date
    },
    batchId: {
      ref: 'Batch',
      required: false,
      type: mongoose.Schema.Types.ObjectId
    },
    by: {
      ref: 'User',
      required: true,
      type: mongoose.Schema.Types.ObjectId
    },
    editedAt: {
      required: false,
      type: Date
    },
    elementId: {
      ref: 'Batch',
      required: false,
      type: mongoose.Schema.Types.ObjectId
    },
    parentId: {
      ref: 'Comment',
      required: false,
      type: mongoose.Schema.Types.ObjectId
    },
    suiteId: {
      ref: 'Suite',
      required: false,
      type: mongoose.Schema.Types.ObjectId
    },
    text: {
      required: true,
      type: String
    },
    type: {
      enum: Object.values(ECommentType),
      default: 'batch',
      type: String
    }
  },
  {
    timestamps: true
  }
)

/**
 *
 */
commentSchema.index({ type: 1 }, { unique: true })

/**
 *
 */
export interface ICommentDocument extends mongoose.Document {
  at: Date
  batchId: mongoose.Types.ObjectId
  by: mongoose.Types.ObjectId
  editedAt: Date
  elementId: mongoose.Types.ObjectId
  parentId: mongoose.Types.ObjectId
  suiteId: mongoose.Types.ObjectId
  text: string
  type: ECommentType
}

/**
 *
 */
export interface ICommentModel extends mongoose.Model<ICommentDocument> {}

/**
 *
 */
export const CommentModel: ICommentModel = mongoose.model<
  ICommentDocument,
  ICommentModel
>('Comment', commentSchema)
