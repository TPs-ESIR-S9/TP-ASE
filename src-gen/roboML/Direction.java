/**
 */
package roboML;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.eclipse.emf.common.util.Enumerator;

/**
 * <!-- begin-user-doc -->
 * A representation of the literals of the enumeration '<em><b>Direction</b></em>',
 * and utility methods for working with them.
 * <!-- end-user-doc -->
 * @see roboML.RoboMLPackage#getDirection()
 * @model
 * @generated
 */
public enum Direction implements Enumerator {
	/**
	 * The '<em><b>Forward</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #FORWARD_VALUE
	 * @generated
	 * @ordered
	 */
	FORWARD(0, "forward", "forward"),

	/**
	 * The '<em><b>Backward</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #BACKWARD_VALUE
	 * @generated
	 * @ordered
	 */
	BACKWARD(1, "backward", "backward"),

	/**
	 * The '<em><b>Side Left</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SIDE_LEFT_VALUE
	 * @generated
	 * @ordered
	 */
	SIDE_LEFT(2, "sideLeft", "sideLeft"),

	/**
	 * The '<em><b>Side Right</b></em>' literal object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SIDE_RIGHT_VALUE
	 * @generated
	 * @ordered
	 */
	SIDE_RIGHT(3, "sideRight", "sideRight");

	/**
	 * The '<em><b>Forward</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #FORWARD
	 * @model name="forward"
	 * @generated
	 * @ordered
	 */
	public static final int FORWARD_VALUE = 0;

	/**
	 * The '<em><b>Backward</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #BACKWARD
	 * @model name="backward"
	 * @generated
	 * @ordered
	 */
	public static final int BACKWARD_VALUE = 1;

	/**
	 * The '<em><b>Side Left</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SIDE_LEFT
	 * @model name="sideLeft"
	 * @generated
	 * @ordered
	 */
	public static final int SIDE_LEFT_VALUE = 2;

	/**
	 * The '<em><b>Side Right</b></em>' literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #SIDE_RIGHT
	 * @model name="sideRight"
	 * @generated
	 * @ordered
	 */
	public static final int SIDE_RIGHT_VALUE = 3;

	/**
	 * An array of all the '<em><b>Direction</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final Direction[] VALUES_ARRAY = new Direction[] { FORWARD, BACKWARD, SIDE_LEFT, SIDE_RIGHT, };

	/**
	 * A public read-only list of all the '<em><b>Direction</b></em>' enumerators.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final List<Direction> VALUES = Collections.unmodifiableList(Arrays.asList(VALUES_ARRAY));

	/**
	 * Returns the '<em><b>Direction</b></em>' literal with the specified literal value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param literal the literal.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static Direction get(String literal) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			Direction result = VALUES_ARRAY[i];
			if (result.toString().equals(literal)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Direction</b></em>' literal with the specified name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param name the name.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static Direction getByName(String name) {
		for (int i = 0; i < VALUES_ARRAY.length; ++i) {
			Direction result = VALUES_ARRAY[i];
			if (result.getName().equals(name)) {
				return result;
			}
		}
		return null;
	}

	/**
	 * Returns the '<em><b>Direction</b></em>' literal with the specified integer value.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the integer value.
	 * @return the matching enumerator or <code>null</code>.
	 * @generated
	 */
	public static Direction get(int value) {
		switch (value) {
		case FORWARD_VALUE:
			return FORWARD;
		case BACKWARD_VALUE:
			return BACKWARD;
		case SIDE_LEFT_VALUE:
			return SIDE_LEFT;
		case SIDE_RIGHT_VALUE:
			return SIDE_RIGHT;
		}
		return null;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final int value;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String name;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private final String literal;

	/**
	 * Only this class can construct instances.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private Direction(int value, String name, String literal) {
		this.value = value;
		this.name = name;
		this.literal = literal;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public int getValue() {
		return value;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getLiteral() {
		return literal;
	}

	/**
	 * Returns the literal value of the enumerator, which is its string representation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		return literal;
	}

} //Direction
