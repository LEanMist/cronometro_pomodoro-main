import type { TaskModel, TaskType } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: number;
    activetask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config: Record<TaskType, number>;
};