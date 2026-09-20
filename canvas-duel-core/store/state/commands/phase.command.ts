import { Phase } from "../entities/phase";
import { CommandBase } from "./command-base";

export class PhaseCommand extends CommandBase {
  save(phase: Phase) {
    this.state.phase = phase
  }
}