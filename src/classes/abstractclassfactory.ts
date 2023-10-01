import ObjectLogger from "../interface/objectlogger";

export default abstract class ObjectLoggerFactory {
  abstract createLogger(): ObjectLogger;
}